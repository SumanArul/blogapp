// Single.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../single.css'; // Import the CSS file

const Single = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    // Fetch user ID from local storage
    const userId = localStorage.getItem('id');

    // Make a request to the backend API to fetch profiles using the user ID
    const fetchProfiles = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/user/${userId}`);
        setProfiles(response.data);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    // Call the fetchProfiles function
    fetchProfiles();
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div className="container">
      <h1 className="header">User Profiles with Blog Posts</h1>
      {profiles.map((profile) => (
        <div key={profile.userId} className="profileContainer">
          <h2 className="username">{profile.username}</h2>
          <p className="email">Email: {profile.email}</p>
          <h3 className="blogHeader">Blog Posts:</h3>
          {profile.posts.map((post) => (
            <div key={post.id} className="postContainer">
              <h4 className="postTitle">{post.title}</h4>
              <p className="postContent">{post.content}</p>
              {/* Include other post details as needed */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Single;
