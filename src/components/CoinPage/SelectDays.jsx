import React from "react";

function SelectDays({ days, handleDaysChange, noPTag }) {
  return (
    <div className={`mb-4 ${noPTag ? "mb-0" : ""}`}>
      {!noPTag && <p className="text-white mb-2 text-sm md:text-base">Price change in</p>}
      <select
        value={days}
        onChange={(e) => handleDaysChange(e)}
        className="w-full md:w-auto bg-gray-800 border border-gray-600 text-white rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
      >
        <option value={7}>7 Days</option>
        <option value={30}>30 Days</option>
        <option value={60}>60 Days</option>
        <option value={90}>90 Days</option>
        <option value={120}>120 Days</option>
        <option value={365}>1 Year</option>
      </select>
    </div>
  );
}

export default SelectDays;
