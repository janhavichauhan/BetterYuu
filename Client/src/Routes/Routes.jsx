// src/App.jsx
import React from 'react';
import {Routes, Route } from 'react-router-dom';
import LoginPage from '../components/LoginComponents/Login.jsx';
import MainLayout from '../components/MainLayout.jsx';
import HomePage from '../pages/HomePage.jsx';
import Dream from '../pages/Dream.jsx';
function AppRoutes() {
  return (
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/dreampage" element={<Dream />} />
        </Routes>
  );
}

export default AppRoutes;