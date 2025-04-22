import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Bugs from './pages/Bugs';
import Navbar from './components/Navbar';
import WelcomeScreen from './pages/WelcomeScreen';

function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<WelcomeScreen isRegistered={isRegistered} isLoggedIn={isLoggedIn} />} />
        <Route path="/register" element={<Register onRegisterSuccess={() => setIsRegistered(true)} />} />
        <Route path="/login" element={isRegistered ? <Login onLoginSuccess={() => setIsLoggedIn(true)} /> : <Navigate to="/" />} />
        <Route path="/bugs" element={isLoggedIn ? <Bugs /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
