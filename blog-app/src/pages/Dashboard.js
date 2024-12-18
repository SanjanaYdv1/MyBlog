import React, { useState, useEffect } from "react";
import { fetchBlogs } from "../services/api";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const history = useHistory();

  useEffect(() => {
    // Fetch the blogs that belong to the logged-in user
    fetchBlogs().then((data) => {
      const userBlogs = data.filter((blog) => blog.author.id === 1); // Assuming the user ID is 1 for now
      setBlogs(userBlogs);
    });
  }, []);

  const handleDelete = (id) => {
    // Logic to delete a blog
    alert(`Delete blog with ID: ${id}`);
  };

  return (
    <div>
      <h1>Your Dashboard</h1>
      <h2>Your Blogs</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <p>{blog.title}</p>
            <button onClick={() => handleDelete(blog.id)}>Delete</button>
            <button onClick={() => history.push(`/blog/${blog.id}`)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
