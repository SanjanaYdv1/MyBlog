import Base from '../components/Base';
import PostCard from "./PostCard";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const homeContainerStyle = {
    backgroundImage: "url('https://img.freepik.com/free-vector/data-protection-background-vector-cyber-security-technology-purple-tone_53876-136341.jpg?semt=ais_hybrid')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: 'white',
    padding: '2rem',
  };

  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/posts/")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Filter posts based on the search query
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Base>
      <div>
        <div style={homeContainerStyle}>
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold mb-2">Welcome to Our Blog</h1>
            <h3 className="text-2xl mb-4">Your daily dose of insights and stories</h3>
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 m-4 text-black"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <h1 className="text-center text-3xl font-semibold mt-6">Welcome to the Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))
          ) : (
            <p className="text-center text-lg">No posts found. Please try a different search term!</p>
          )}
        </div>
      </div>
    </Base>
  );
}

export default Home;