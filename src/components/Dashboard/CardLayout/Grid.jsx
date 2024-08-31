import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaArrowDown, FaArrowUp } from "react-icons/fa";
import saveItemToWatchlist from "../../../functions/saveItemToWatchlist";
import removeItemToWatchlist from "../../../functions/removeItemToWatchlist";

function Grid({ coin, delay }) {
  const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
  const [isCoinAdded, setIsCoinAdded] = useState(watchlist.includes(coin.id));

  return (
    <a
      href={`/coin/${coin.id}`}
      className="block transition-transform duration-500 transform hover:scale-105"
    >
      <div
        className={`relative bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border ${
          coin.price_change_percentage_24h < 0 ? "border-red-600" : "border-gray-200"
        } dark:border-gray-700`}
        style={{ animationDelay: `${delay}s` }}
      >
        <div className="flex flex-col md:flex-row items-center mb-4 space-y-4 md:space-y-0 md:space-x-4">
          <img
            src={coin.image}
            alt={coin.name}
            className="w-20 h-20 md:w-16 md:h-16 object-contain"
          />
          <div className="flex flex-col justify-between flex-grow">
            <div className="flex justify-between items-center mb-2">
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 truncate">{coin.symbol}</p>
              <p className="text-md text-gray-600 dark:text-gray-300">{coin.name}</p>
            </div>
            <div
              className={`absolute top-2 right-2 cursor-pointer ${
                coin.price_change_percentage_24h < 0 ? "text-red-600" : "text-gray-800"
              }`}
              onClick={(e) => {
                e.preventDefault();
                if (isCoinAdded) {
                  removeItemToWatchlist(e, coin.id, setIsCoinAdded);
                } else {
                  setIsCoinAdded(true);
                  saveItemToWatchlist(e, coin.id);
                }
              }}
            >
              {isCoinAdded ? <FaStar size={20} /> : <FaStarHalfAlt size={20} />}
            </div>
          </div>
        </div>
        <div className="flex items-center mb-2">
          <div
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              coin.price_change_percentage_24h >= 0 ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
            }`}
          >
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="ml-2 text-lg text-gray-800 dark:text-gray-100">
            {coin.price_change_percentage_24h >= 0 ? <FaArrowUp /> : <FaArrowDown />}
          </div>
        </div>
        <p className={`text-xl font-bold ${coin.price_change_percentage_24h >= 0 ? "text-gray-900" : "text-red-600"}`}>
          ${coin.current_price.toLocaleString()}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
          Total Volume: <span className="font-medium">{coin.total_volume.toLocaleString()}</span>
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
          Market Capital: <span className="font-medium">${coin.market_cap.toLocaleString()}</span>
        </p>
      </div>
    </a>
  );
}

export default Grid;
