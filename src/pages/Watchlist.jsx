import React, { useEffect, useState } from "react";
import Button from "../components/Common/Button";
import TabsComponent from "../components/Dashboard/TabsComponent";
import get100Coins from "../functions/get100Coins";

function Watchlist() {
  const [coins, setCoins] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const storedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(storedWatchlist);
    if (storedWatchlist.length > 0) {
      getData(storedWatchlist);
    }
  }, []);

  const getData = async (watchlist) => {
    const allCoins = await get100Coins();
    if (allCoins) {
      setCoins(allCoins.filter((coin) => watchlist.includes(coin.id)));
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <div className="flex-grow p-4 sm:p-6 lg:p-8">
        {watchlist.length > 0 ? (
          <TabsComponent coins={coins} setSearch={() => {}} />
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-8">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Sorry, No Items In The Watchlist.
            </h1>
            <div className="mt-4">
              <a href="/dashboard">
                <Button text="Go to Dashboard" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Watchlist;
