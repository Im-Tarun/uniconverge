import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleChange}
      placeholder="Search by name or email..."
      className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring focus:ring-blue-300"
    />
  );
};

export default SearchBar;
