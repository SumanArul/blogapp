import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../write.css";

const Write = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
    tags: "",
    token,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/blog/", formData);
      console.log("Blog post created successfully:", response.data);

      // Navigate to /home after successful blog post creation
      navigate("/home");
    } catch (error) {
      console.error("Error creating blog post:", error);
    }
  };

  return (
    <div className="write-container">
      <h1>Create a New Blog Post</h1>
      <form onSubmit={handleSubmit} className="write-form">
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label>Content:</label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          required
        />

        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />

        <label>Tags:</label>
        <input
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
        />

        <button type="submit">Create Blog Post</button>
      </form>
    </div>
  );
};

export default Write;
