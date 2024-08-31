import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1000]">
      <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-t-4 border-gray-200 border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
