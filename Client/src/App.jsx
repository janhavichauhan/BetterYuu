import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import AuthPage from './pages/AuthPage';
import GlobalForums from './pages/GlobalForums';
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/forums" element={<GlobalForums />} />
    </Routes>
  );
}

export default App
