CREATE DATABASE IF NOT EXISTS treeniti;
USE treeniti;

create table users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  phone VARCHAR(15) NOT NULL UNIQUE,
  name VARCHAR(50),
  language ENUM('hi','en') DEFAULT 'en',
  referral_code VARCHAR(12) UNIQUE,
  referred_by INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE wallets (
  user_id INT PRIMARY KEY,
  coin_balance INT DEFAULT 0,
  FOREIGN KEY (user_id) REFERENCES users(id)
);


CREATE TABLE user_otps (
  id INT AUTO_INCREMENT PRIMARY KEY,
  phone VARCHAR(15) NOT NULL,
  otp_hash VARCHAR(255) NOT NULL,
  expires_at DATETIME NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
show tables;
