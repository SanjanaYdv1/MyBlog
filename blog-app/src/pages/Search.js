import React, { useState, useEffect } from "react";
import { fetchBlogs } from "../services/api";
import { useLocation } from "react-router-dom";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");
  const search = new URLSearchParams(useLocation().search);

  useEffect(() => {
    const searchQuery = search.get("query");
    if (searchQuery) {
      setQuery(searchQuery);
      fetchBlogs({ search: searchQuery }).then((data) => setSearchResults(data));
    }
  }, [search]);

  return (
    <div>
      <h1>Search Results</h1>
      <input
        type="text"
        placeholder="Search blogs"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={() => window.location.href = `/search?query=${query}`}>Search</button>
      <ul>
        {searchResults.map((blog) => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
