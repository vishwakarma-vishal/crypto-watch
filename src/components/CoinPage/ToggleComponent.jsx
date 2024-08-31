import React from "react";

export default function ToggleComponents({ priceType, handlePriceTypeChange }) {
  return (
    <div className="flex flex-wrap justify-center items-center mb-6">
      <div className="flex text-sm sm:text-md md:text-lg border border-blue-600 rounded-lg overflow-hidden">
        <button
          value="prices"
          onClick={() => handlePriceTypeChange({ target: { value: "prices" } })}
          className={`py-2 px-4 w-auto transition-colors ${
            priceType === "prices"
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600 hover:bg-blue-100"
          }`}
        >
          Prices
        </button>
        <button
          value="market_caps"
          onClick={() => handlePriceTypeChange({ target: { value: "market_caps" } })}
          className={`py-2 px-4 w-auto transition-colors ${
            priceType === "market_caps"
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600 hover:bg-blue-100"
          }`}
        >
          Market Cap
        </button>
        <button
          value="total_volumes"
          onClick={() => handlePriceTypeChange({ target: { value: "total_volumes" } })}
          className={`py-2 px-4 w-auto transition-colors ${
            priceType === "total_volumes"
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600 hover:bg-blue-100"
          }`}
        >
          Total Volume
        </button>
      </div>
    </div>
  );
}
