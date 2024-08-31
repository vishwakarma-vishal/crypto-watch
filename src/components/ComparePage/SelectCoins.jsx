import React from "react";
import SelectDays from "../CoinPage/SelectDays";

function SelectCoins({
  allCoins,
  crypto1,
  crypto2,
  onCoinChange,
  days,
  handleDaysChange,
}) {
  return (
    <div className="flex flex-wrap justify-start items-center gap-4 py-6">
      <div className="flex flex-col items-start gap-2">
        <label htmlFor="crypto1" className="text-white text-sm sm:text-base">
          Coin 1
        </label>
        <select
          id="crypto1"
          value={crypto1}
          onChange={(e) => onCoinChange(e, false)}
          className="h-10 w-32 px-3 py-2 border border-gray-300 rounded-lg bg-gray-800 text-white focus:border-blue-500 focus:outline-none text-sm sm:text-base"
        >
          {allCoins
            .filter((coin) => coin.id !== crypto2)
            .map((coin) => (
              <option value={coin.id} key={coin.id}>
                {coin.name}
              </option>
            ))}
        </select>
      </div>

      <div className="flex flex-col items-start gap-2">
        <label htmlFor="crypto2" className="text-white text-sm sm:text-base">
          Coin 2
        </label>
        <select
          id="crypto2"
          value={crypto2}
          onChange={(e) => onCoinChange(e, true)}
          className="h-10 w-32 px-3 py-2 border border-gray-300 rounded-lg bg-gray-800 text-white focus:border-blue-500 focus:outline-none text-sm sm:text-base"
        >
          {allCoins
            .filter((coin) => coin.id !== crypto1)
            .map((coin) => (
              <option value={coin.id} key={coin.id}>
                {coin.name}
              </option>
            ))}
        </select>
      </div>

      <div className="flex flex-col items-start gap-2">
        <label className="text-white text-sm sm:text-base">Days</label>
        <SelectDays
          days={days}
          handleDaysChange={handleDaysChange}
          noPTag={true}
        />
      </div>
    </div>
  );
}

export default SelectCoins;
