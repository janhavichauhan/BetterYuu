// src/App.jsx
import React from 'react';
import {Routes, Route } from 'react-router-dom';
import LoginPage from '../components/LoginComponents/Login.jsx';
import MainLayout from '../components/MainLayout.jsx';
import HomePage from '../pages/HomePage.jsx';
import Dream from '../pages/Dream.jsx';
import Aiassesment from '../components/HomePageComponents/Aisssesment.jsx';
import GoalDashboard from '../components/HomePageComponents/Setgoals.jsx';
import BlogCreator from '../components/HomePageComponents/Blogs.jsx';
import BlogFeed from '../components/HomePageComponents/ViewBlogs.jsx';
import CoursesDashboard from '../components/HomePageComponents/Courses.jsx';
import ProductivityDashboard from '../components/HomePageComponents/Streak.jsx';
import AiChat from '../components/HomePageComponents/Aichat.jsx';
function AppRoutes() {
  return (
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/dreampage" element={<Dream />} />
          <Route path="/aiassesment" element={<Aiassesment />} />
          <Route path="/set-goals" element={<GoalDashboard />} />
          <Route path="/add-blog" element={<BlogCreator />} />
          <Route path="/view-blogs" element={<BlogFeed />} />
          <Route path="/courses" element={<CoursesDashboard />} />
          <Route path="/streak" element={<ProductivityDashboard />} />
          <Route path="/ai-tutor" element={<AiChat />} />
        </Routes>
  );
}

export default AppRoutes;