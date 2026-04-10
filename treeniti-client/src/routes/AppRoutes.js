// src/routes/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import your pages
import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Starting Page (One-time Page) */}
      <Route path="/" element={<Welcome />} />
      
      {/* Login Page */}
      <Route path="/login" element={<Login />} />
      
      {/* Dashboard - Main Screen */}
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;