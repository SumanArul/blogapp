import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/auth/login", inputs);
      console.log("Login successful:", response.data);

      // Store the token in local storage on successful login
      localStorage.setItem("token", response.data.token);

      // Store user information in local storage
      localStorage.setItem("user", JSON.stringify(response.data.user));

      // Navigate to the desired page on successful login
      navigate("/home");
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
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
        <button type="button" onClick={handleSubmit}>
          Login
        </button>
        {err && <p>{err}</p>}
        <span>
          Don't you have an account? <Link to="/signup">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
