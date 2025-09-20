// src/App.jsx
import React from 'react';
import {Routes, Route, useLocation } from 'react-router-dom';
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
import PageWrapper from '../utils/PageWrapper.jsx';
function AppRoutes() {
  return (
        <Routes>
          <Route path="/" element={<div data-barba="container" data-barba-namespace="main"><MainLayout /></div>} />
          <Route path="/login" element={<div data-barba="container" data-barba-namespace="login"><LoginPage /></div>} />
          <Route path="/home" element={<div data-barba="container" data-barba-namespace="home"><HomePage /></div>} />
          <Route path="/dreampage" element={<div data-barba="container" data-barba-namespace="dream"><Dream /></div>} />
          <Route path="/aiassesment" element={<div data-barba="container" data-barba-namespace="aiassesment"><Aiassesment /></div>} />
          <Route path="/set-goals" element={<div data-barba="container" data-barba-namespace="goals"><GoalDashboard /></div>} />
          <Route path="/add-blog" element={<div data-barba="container" data-barba-namespace="addblog"><BlogCreator /></div>} />
          <Route path="/view-blogs" element={<div data-barba="container" data-barba-namespace="viewblogs"><BlogFeed /></div>} />
          <Route path="/courses" element={<div data-barba="container" data-barba-namespace="courses"><CoursesDashboard /></div>} />
          <Route path="/streak" element={<div data-barba="container" data-barba-namespace="streak"><ProductivityDashboard /></div>} />
          <Route path="/ai-tutor" element={<div data-barba="container" data-barba-namespace="aitutor"><AiChat /></div>} />
        </Routes>
  );
}

export default AppRoutes;