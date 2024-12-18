import React, { useState } from "react";

const PostCard = ({ post }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4 border border-gray-300"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      <div className="md:flex">
        {post.image && (
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src={post.image}
              alt={post.title}
            />
          </div>
        )}
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
          <p className="text-gray-600 text-sm mb-2">
            By {post.author} on {new Date(post.created_at).toLocaleDateString()}
          </p>
          <p className="text-gray-700 text-sm mb-4">
            {isExpanded ? post.content : post.content.substring(0, 100) + "..."}
          </p>
          {!isExpanded && (
            <button
              className="text-blue-500 font-medium"
              onClick={() => setIsExpanded(true)}
            >
              Read More
            </button>
          )}
          {isExpanded && (
            <button
              className="text-red-500 font-medium"
              onClick={() => setIsExpanded(false)}
            >
              Show Less
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
    </div>
  );
};

export default PostCard;
