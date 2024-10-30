import React, { useState } from "react";
import Grid from "./CardLayout/Grid";
import List from "./CardLayout/List";
import Button from "../Common/Button";

const TabsComponent = ({ coins, setSearch }) => {
  const [tab, setTab] = useState("grid");

  const handleTabChange = (newTab) => {
    setTab(newTab);
  };

  return (
    <div className="my-4 sm:my-6 w-full">
      {/* Tabs Header */}
      <div className="border-b border-gray-300 dark:border-gray-700 flex flex-wrap">
        <button
          className={`py-2 px-4 text-sm font-semibold flex-1 ${tab === "grid" ? "text-blue-400 border-b-2 border-blue-500" : "text-gray-500 dark:text-gray-300"}`}
          onClick={() => handleTabChange("grid")}
        >
          Grid
        </button>
        <button
          className={`py-2 px-4 text-sm font-semibold flex-1 ${tab === "list" ? "text-blue-400 border-b-2 border-blue-500" : "text-gray-500 dark:text-gray-300"}`}
          onClick={() => handleTabChange("list")}
        >
          List
        </button>
      </div>

      {/* Tab Panels */}
      <div className="p-4 py-8">
        {tab === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {coins.length > 0 ? (
              coins.map((coin, i) => (
                <Grid coin={coin} key={i} delay={(i % 4) * 0.2} />
              ))
            ) : (
                  <div className="text-center">
                    <h1 className="text-xl font-semibold mb-4">
                      Sorry, Couldn't find the coin you're looking for 😞
                    </h1>
                    <Button text="Clear Search" onClick={() => setSearch("")} />
                  </div>
            )}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <tbody>
                {coins.length > 0 ? (
                  coins.map((coin, i) => (
                    <List coin={coin} key={i} delay={(i % 8) * 0.2} />
                  ))
                ) : (
                  <tr>
                    <td colSpan="100%" className="text-center p-4">
                      <h1 className="text-xl font-semibold mb-4">
                        Sorry, Couldn't find the coin you're looking for 😞
                      </h1>
                      <Button text="Clear Search" onClick={() => setSearch("")} />
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabsComponent;
