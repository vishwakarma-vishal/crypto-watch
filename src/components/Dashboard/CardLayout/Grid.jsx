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
      className="block transition-transform duration-500 transform hover:scale-105 hover:shadow-xl"
    >
      <div
        className={`relative bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg ${
          coin.price_change_percentage_24h < 0 ? "border-red-600" : "border-gray-200"
        } dark:border-gray-700`}
        style={{ animationDelay: `${delay}s` }}
      >
        <div className="flex flex-col md:flex-row items-center mb-4 space-y-4 md:space-y-0 md:space-x-4">
          <img
            src={coin.image}
            alt={coin.name}
            className="w-20 h-20 md:w-14 md:h-14 object-contain"
          />
          <div className="flex flex-col justify-between flex-grow">
            <div className="flex justify-start gap-6 items-center mb-2">
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 truncate">{coin.symbol}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">{coin.name}</p>
            </div>
            <div
              className={`absolute top-2 right-2 cursor-pointer ${
                coin.price_change_percentage_24h < 0 ? "text-red-600" : "text-blue-400"
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
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              coin.price_change_percentage_24h >= 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}
          >
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="ml-2 text-md text-gray-800 dark:text-gray-100">
            {coin.price_change_percentage_24h >= 0 ? <FaArrowUp /> : <FaArrowDown />}
          </div>
        </div>

        <p className={`text-md font-semibold ${coin.price_change_percentage_24h >= 0 ? "text-blue-400" : "text-red-600"}`}>
          ${coin.current_price.toLocaleString()}
        </p>
        <p className="text-sm font-semibold text-gray-600 dark:text-gray-500 mt-2">
          Total Volume: <span className="font-medium font-normal">{coin.total_volume.toLocaleString()}</span>
        </p>
        <p className="text-sm font-semibold text-gray-600 dark:text-gray-500 mt-1">
          Market Capital: <span className="font-medium font-normal">${coin.market_cap.toLocaleString()}</span>
        </p>
      </div>
    </a>
  );
}

export default Grid;
