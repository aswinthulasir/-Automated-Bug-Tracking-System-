import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./WelcomeScreen.css";

const WelcomeScreen = () => {
  const navigate = useNavigate();
  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    // Show Register button after animation (simulate 5 sec animation delay)
    const timer = setTimeout(() => {
      setShowRegister(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="welcome-container">
      <div className="bug-animation"></div>
      <h1 className="welcome-text">Welcome to Automated Bug Tracking System</h1>
      {showRegister && (
        <button onClick={() => navigate("/register")} className="register-btn">
          Register
        </button>
      )}
    </div>
  );
};

export default WelcomeScreen;
