import React from 'react';

const PaginationControlled = ({ page, handlePageChange, totalPages }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex flex-wrap justify-center mt-4">
      <nav>
        <ul className="flex flex-wrap justify-center items-center space-x-2 gap-y-4">
          {page > 1 && (
            <li>
              <button
                className="px-3 py-1 border border-gray-500 text-white rounded-full hover:bg-blue-700 hover:border-blue-700 transition-colors"
                onClick={() => handlePageChange(page - 1)}
              >
                &laquo;
              </button>
            </li>
          )}
          {pageNumbers.map((pageNumber) => (
            <li key={pageNumber}>
              <button
                className={`px-3 py-1 border rounded-full transition-colors ${
                  page === pageNumber
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-gray-800 text-white border-gray-600 hover:bg-blue-700 hover:border-blue-700'
                }`}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            </li>
          ))}
          {page < totalPages && (
            <li>
              <button
                className="px-3 py-1 border border-gray-500 text-white rounded-full hover:bg-blue-700 hover:border-blue-700 transition-colors"
                onClick={() => handlePageChange(page + 1)}
              >
                &raquo;
              </button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default PaginationControlled;
