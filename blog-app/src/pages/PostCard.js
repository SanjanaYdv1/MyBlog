import React, { useState } from "react";

const PostCard = ({ post }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden my-4 border border-gray-300 cursor-pointer"
      style={{ fontFamily: "Arial, sans-serif" }}
      onClick={() => setIsExpanded(!isExpanded)} // Toggle expand on card click
    >
      {post.image && (
        <div>
          <img
            className="h-48 w-full object-cover"
            src={post.image}
            alt={post.title}
          />
        </div>
      )}
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h2>
        <p className="text-gray-600 text-sm mb-2">
          By {post.author} on {new Date(post.created_at).toLocaleDateString()}
        </p>
        <p className="text-gray-700 text-sm mb-4">
          {isExpanded ? post.content : post.content.substring(0, 100) + "..."}
        </p>
        {isExpanded ? (
          <button
            className="text-red-500 font-medium"
            onClick={(e) => {
              e.stopPropagation(); // Prevent card click event
              setIsExpanded(false);
            }}
          >
            Show Less
          </button>
        ) : (
          <button
            className="text-blue-500 font-medium"
            onClick={(e) => {
              e.stopPropagation(); // Prevent card click event
              setIsExpanded(true);
            }}
          >
            Read More
          </button>
        )}
        <div className="mt-4 flex items-center justify-between">
          <button className="text-gray-500 hover:text-blue-500">
            👍 Like
          </button>
          <button className="text-gray-500 hover:text-green-500">
            💬 Comment
          </button>
          <button className="text-gray-500 hover:text-purple-500">
            🔗 Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;