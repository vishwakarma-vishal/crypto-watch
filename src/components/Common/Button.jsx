import React from "react";

function Button({ text, onClick, outlined }) {
  return (
    <button
      className={`px-4 py-2 font-semibold text-sm rounded-md transition-all duration-200 
        ${outlined ? "bg-transparent text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white" : "bg-blue-600 text-white hover:bg-blue-700"}
      `}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
