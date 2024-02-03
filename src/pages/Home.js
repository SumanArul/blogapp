import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../home.css'

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch all blog posts
    const fetchAllBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:8000/blog/");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching all blogs:", error);
      }
    };

    fetchAllBlogs();
  }, []);

  return (
    <div>
      <h2>All Blog Posts</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link to={`/posts/${blog.id}`}>
              <h3>{blog.title}</h3>
            </Link>
            <p>Author: {blog.authorUsername}</p>
            <p>{blog.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
