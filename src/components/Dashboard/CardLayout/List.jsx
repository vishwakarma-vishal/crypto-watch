import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaArrowDown, FaArrowUp } from "react-icons/fa";
import convertNumber from "../../../functions/convertNumber";
import saveItemToWatchlist from "../../../functions/saveItemToWatchlist";
import removeItemToWatchlist from "../../../functions/removeItemToWatchlist";

function List({ coin, delay }) {
  const navigate = useNavigate();
  const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
  const [isCoinAdded, setIsCoinAdded] = useState(watchlist.includes(coin.id));

  const handleClick = () => {
    navigate(`/coin/${coin.id}`);
  };

  return (
    <div
      className="flex flex-wrap items-center justify-between p-2 border-b border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all cursor-pointer"
      style={{ animationDelay: `${delay}s` }}
      onClick={handleClick}
    >
      <div className="w-14 h-14 md:w-18 md:h-18 flex-shrink-0">
        <img
          src={coin.image}
          alt={coin.name}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex-1 min-w-[100px] md:min-w-[150px] flex flex-col text-sm md:text-base mx-2">
        <p className="text-gray-900 dark:text-gray-100 font-medium truncate">
          {coin.symbol.toUpperCase()}
        </p>
        <p className="text-gray-700 dark:text-gray-300 truncate">
          {coin.name}
        </p>
      </div>
      <div className="flex-shrink-0 text-xs md:text-sm mx-2 flex items-center">
        <div
          className={`px-2 py-1 rounded-full ${
            coin.price_change_percentage_24h >= 0
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {coin.price_change_percentage_24h.toFixed(2)}%
        </div>
        <div className="ml-2 text-lg">
          {coin.price_change_percentage_24h >= 0 ? (
            <FaArrowUp className="text-green-600 dark:text-green-400" />
          ) : (
            <FaArrowDown className="text-red-600 dark:text-red-400" />
          )}
        </div>
      </div>
      <div className="text-right text-xs md:text-sm mx-2">
        <p
          className={`${
            coin.price_change_percentage_24h >= 0
              ? "text-gray-900 dark:text-gray-100"
              : "text-red-600 dark:text-red-400"
          }`}
        >
          ${coin.current_price.toLocaleString()}
        </p>
      </div>
      <div className="text-right text-xs md:text-sm mx-2">
        <p className="text-gray-800 dark:text-gray-200">
          {coin.total_volume.toLocaleString()}
        </p>
      </div>
      <div className="text-right text-xs md:text-sm mx-2">
        <p className="text-gray-800 dark:text-gray-200">
          {coin.market_cap.toLocaleString()}
        </p>
      </div>
      <div
        className={`flex-shrink-0 text-lg md:text-xl mx-2 ${
          coin.price_change_percentage_24h < 0
            ? "text-red-600 dark:text-red-400"
            : "text-gray-800 dark:text-gray-200"
        }`}
        onClick={(e) => {
          e.stopPropagation(); // Prevent click event from triggering the row click
          if (isCoinAdded) {
            removeItemToWatchlist(e, coin.id, setIsCoinAdded);
          } else {
            setIsCoinAdded(true);
            saveItemToWatchlist(e, coin.id);
          }
        }}
      >
        {isCoinAdded ? <FaStar /> : <FaStarHalfAlt />}
      </div>
    </div>
  );
}

export default List;
