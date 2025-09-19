import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import AppRoutes from './Routes/Routes';

function App() {
  return (
   <>
    <main>
      <AppRoutes />
    </main>
   </>
  );
}

export default App
