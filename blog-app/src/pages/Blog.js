import React, { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "./PostCard";
import Base from '../components/Base';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/posts/")
      .then((res) => {
        setPosts(res.data);
        setFilteredPosts(res.data); // Initialize filteredPosts with all posts
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const results = posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.content.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPosts(results);
    } else {
      setFilteredPosts(posts);
    }
  }, [searchQuery, posts]);

  return (
    <Base>
      <div className="p-4 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-6">Blog Posts</h1>
        
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search posts..."
            className="p-2 border border-gray-300 rounded w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center text-gray-500">
            <p>No posts found. Please try a different search term.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </Base>
  );
};

export default Blog;