const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pool = require("../config/db");
const axios = require("axios");
require("dotenv").config();

const router = express.Router();

function generateOtp() {
  // 4-digit numeric string
  return Math.floor(1000 + Math.random() * 9000).toString();
}

// 1. SEND OTP ROUTE
router.post("/send-otp", async (req, res) => {
  const { phone } = req.body;
  
  if (!phone || phone.length < 10) {
    return res.status(400).json({ success: false, message: "Valid phone is required" });
  }

  try {
    const otp = generateOtp();
    // Salt rounds 10 hi rakhein
    const hash = await bcrypt.hash(otp, 10);
    const expMinutes = parseInt(process.env.OTP_EXP_MINUTES) || 5;

    // Pehle purane OTPs clear karna achha practice hai (Optional)
    // await pool.query("DELETE FROM user_otps WHERE phone = ?", [phone]);

    const query = `
      INSERT INTO user_otps (phone, otp_hash, expires_at) 
      VALUES (?, ?, DATE_ADD(NOW(), INTERVAL ? MINUTE))
    `;

    await pool.query(query, [phone, hash, expMinutes]);

    console.log("-----------------------------------------");
    console.log(`✅ Success: OTP for ${phone} is: ${otp}`);
    console.log("-----------------------------------------");

    return res.status(200).json({ 
      success: true, 
      message: "OTP generated", 
      devOtp: otp 
    });

  } catch (err) {
    console.error("❌ Database Error:", err.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// 2. VERIFY OTP & LOGIN ROUTE
router.post("/verify-otp", async (req, res) => {
  const { phone, otp } = req.body;
  
  // Debugging logs
  console.log(`--> Verifying ${phone} with OTP input: ${otp}`);

  if (!phone || !otp) {
    return res.status(400).json({ success: false, message: "Phone and OTP required" });
  }

  try {
    // 1. ORDER BY id DESC use karein created_at ki jagah, taaki hamesha LATEST mile
    const [otpRows] = await pool.query(
      "SELECT * FROM user_otps WHERE phone = ? ORDER BY id DESC LIMIT 1",
      [phone]
    );

    if (otpRows.length === 0) {
      return res.status(400).json({ success: false, message: "No OTP record found" });
    }

    const record = otpRows[0];

    // 2. Time Check
    const now = new Date();
    const expiry = new Date(record.expires_at);
    if (expiry < now) {
      return res.status(400).json({ success: false, message: "OTP has expired" });
    }

    // 3. BCrypt Compare (FORCE STRING CONVERSION)
    // frontend se kabhi number aata hai toh .toString() zaroori hai
    const isMatch = await bcrypt.compare(otp.toString(), record.otp_hash);
    
    console.log("--> Bcrypt Match Result:", isMatch);

    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Invalid OTP. Please try again." });
    }

    // 4. Verification successful, ab user fetch/create karein
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
      
      const [newUser] = await pool.query("SELECT * FROM users WHERE id = ?", [userId]);
      user = newUser[0];
    } else {
      user = userRows[0];
    }

    // 5. JWT Token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'secret123', { expiresIn: "7d" });

    // 6. OTP use hone ke baad delete kar dein (Security)
    await pool.query("DELETE FROM user_otps WHERE phone = ?", [phone]);

    return res.json({
      success: true,
      token,
      user: {
        id: user.id,
        phone: user.phone,
        name: user.name || "User",
        referral_code: user.referral_code
      }
    });

  } catch (err) {
    console.error("❌ Verify-otp error:", err.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;