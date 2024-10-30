import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = ({ search, handleChange }) => {
  return (
    <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-lg p-2 md:p-3">
      <FaSearch className="text-gray-500 dark:text-gray-300 text-lg sm:text-xl md:text-2xl" />
      <input
        className="ml-2 w-full bg-transparent border-none text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none text-sm sm:text-base md:text-lg"
        placeholder="Search"
        value={search}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default Search;
