import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    phoneNumber: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/auth/register", inputs, { withCredentials: true });
      console.log("Registration successful!");
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <input
          required
          type="text"
          placeholder="firstname"
          name="firstname"
          onChange={handleChange}
        />
        <input
          required
          type="text"
          placeholder="lastname"
          name="lastname"
          onChange={handleChange}
        />
        <input
          required
          type="text"
          placeholder="phoneNumber"
          name="phoneNumber"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Register</button>
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Signup;
