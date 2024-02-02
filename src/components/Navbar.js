import React, { useState, useEffect } from 'react';
import Logo from '../images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import '../navbar.css'; // Import the CSS file

const Navbar = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in
    const token = localStorage.getItem('token');
    if (token) {
      // Set isLoggedIn to true and fetch the username and email from localStorage
      setIsLoggedIn(true);
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser) {
        // Assuming you have an 'email' property in your user object
        setUserEmail(storedUser.email);
      }
    }
  }, []);

  const handleLogout = () => {
    // Clear local storage and update state
    localStorage.clear();
    setIsLoggedIn(false);
    setUserEmail('');
    // Navigate to the home page or login page
    navigate('/signup');
  };

  return (
    <div className='navbar-container'>
      <div className='navbar-logo'>
        <Link to='/'>
          <img src={Logo} alt='' />
        </Link>
      </div>
      <div className='navbar-links'>
        <Link className='navbar-link' to='/home'>
          Home
        </Link>
        <Link className='navbar-link' to='/write'>
          Write
        </Link>
        {isLoggedIn ? (
          <>
            <span className='navbar-username'>Hello, {userEmail}</span>
            <span className='navbar-link' onClick={handleLogout}>
              Logout
            </span>
            <Link className='navbar-link' to='/single'>
              Profile
            </Link>
          </>
        ) : (
          <>
            <Link className='navbar-link' to='/login'>
              Login
            </Link>
            <Link className='navbar-link' to='/signup'>
              Signup
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
