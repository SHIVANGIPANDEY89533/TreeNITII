// routes/auth.js
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pool = require("../config/db");
require("dotenv").config();

const router = express.Router();

function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// send OTP
router.post("/send-otp", async (req, res) => {
  try {
    const { phone } = req.body;
    if (!phone) {
      return res.status(400).json({ message: "Phone required" });
    }

    const otp = generateOtp();
    const hash = await bcrypt.hash(otp, 10);
    const expMinutes = Number(process.env.OTP_EXP_MINUTES || 5);
    const [rows] = await pool.query(
      "INSERT INTO user_otps (phone, otp_hash, expires_at) VALUES (?, ?, DATE_ADD(NOW(), INTERVAL ? MINUTE))",
      [phone, hash, expMinutes]
    );

    // In production: send OTP via SMS provider here
    // For development: return OTP so you can test
    return res.json({ message: "OTP generated", devOtp: otp });
  } catch (err) {
    console.error("send-otp error", err);
    res.status(500).json({ message: "Server error" });
  }
});

// verify OTP and login
router.post("/verify-otp", async (req, res) => {
  try {
    const { phone, otp } = req.body;
    if (!phone || !otp) {
      return res.status(400).json({ message: "Phone and OTP required" });
    }

    // get latest OTP for this phone
    const [otpRows] = await pool.query(
      "SELECT * FROM user_otps WHERE phone = ? ORDER BY created_at DESC LIMIT 1",
      [phone]
    );
    if (otpRows.length === 0) {
      return res.status(400).json({ message: "OTP not found" });
    }

    const record = otpRows[0];

    // check expiry
    if (new Date(record.expires_at) < new Date()) {
      return res.status(400).json({ message: "OTP expired" });
    }

    const isMatch = await bcrypt.compare(otp, record.otp_hash);
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect OTP" });
    }

    // find or create user
    const [userRows] = await pool.query("SELECT * FROM users WHERE phone = ?", [phone]);
    let user;
    if (userRows.length === 0) {
      const referralCode = "TR" + Math.random().toString(36).substring(2, 8).toUpperCase();
      const [result] = await pool.query(
        "INSERT INTO users (phone, referral_code) VALUES (?, ?)",
        [phone, referralCode]
      );
      const userId = result.insertId;
      await pool.query("INSERT INTO wallets (user_id, coin_balance) VALUES (?, 0)", [userId]);

      const [createdUserRows] = await pool.query("SELECT * FROM users WHERE id = ?", [userId]);
      user = createdUserRows[0];
    } else {
      user = userRows[0];
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // don’t expose internal fields unnecessarily
    const safeUser = {
      id: user.id,
      phone: user.phone,
      name: user.name,
      language: user.language,
      referral_code: user.referral_code,
    };

    return res.json({ token, user: safeUser });
  } catch (err) {
    console.error("verify-otp error", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;