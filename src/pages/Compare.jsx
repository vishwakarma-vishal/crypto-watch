import React, { useEffect, useState } from "react";
import Loader from "../components/Common/Loader";
import SelectCoins from "../components/ComparePage/SelectCoins";
import List from "../components/Dashboard/CardLayout/List";
import ToggleComponents from "../components/CoinPage/ToggleComponent";
import LineChart from "../components/CoinPage/LineChart";
import Info from "../components/CoinPage/Info";

import get100Coins from "../functions/get100Coins";
import getCoinData from "../functions/getCoinData";
import getPrices from "../functions/getPrices";
import settingChartData from "../functions/settingChartData";
import settingCoinObject from "../functions/settingCoinObject";

function Compare() {
  const [allCoins, setAllCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [coin1Data, setCoin1Data] = useState({});
  const [coin2Data, setCoin2Data] = useState({});
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    const coins = await get100Coins();
    if (coins) {
      setAllCoins(coins);
      const data1 = await getCoinData(crypto1);
      const data2 = await getCoinData(crypto2);
      settingCoinObject(data1, setCoin1Data);
      settingCoinObject(data2, setCoin2Data);
      if (data1 && data2) {
        const prices1 = await getPrices(crypto1, days, priceType);
        const prices2 = await getPrices(crypto2, days, priceType);
        settingChartData(setChartData, prices1, prices2);
        setLoading(false);
      }
    }
  };

  const onCoinChange = async (e, isCoin2) => {
    setLoading(true);
    if (isCoin2) {
      const newCrypto2 = e.target.value;
      setCrypto2(newCrypto2);
      const data2 = await getCoinData(newCrypto2);
      settingCoinObject(data2, setCoin2Data);
      const prices1 = await getPrices(crypto1, days, priceType);
      const prices2 = await getPrices(newCrypto2, days, priceType);
      settingChartData(setChartData, prices1, prices2);
    } else {
      const newCrypto1 = e.target.value;
      setCrypto1(newCrypto1);
      const data1 = await getCoinData(newCrypto1);
      settingCoinObject(data1, setCoin1Data);
      const prices1 = await getPrices(newCrypto1, days, priceType);
      const prices2 = await getPrices(crypto2, days, priceType);
      settingChartData(setChartData, prices1, prices2);
    }
    setLoading(false);
  };

  const handleDaysChange = async (e) => {
    const newDays = e.target.value;
    setLoading(true);
    setDays(newDays);
    const prices1 = await getPrices(crypto1, newDays, priceType);
    const prices2 = await getPrices(crypto2, newDays, priceType);
    settingChartData(setChartData, prices1, prices2);
    setLoading(false);
  };

  const handlePriceTypeChange = async (e) => {
    const newPriceType = e.target.value;
    setLoading(true);
    setPriceType(newPriceType);
    const prices1 = await getPrices(crypto1, days, newPriceType);
    const prices2 = await getPrices(crypto2, days, newPriceType);
    settingChartData(setChartData, prices1, prices2);
    setLoading(false);
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 dark:bg-gray-900 flex flex-col">
      {loading || !coin1Data?.id || !coin2Data?.id ? (
        <Loader />
      ) : (
        <>
          <div className="container mx-auto p-4 sm:p-6 lg:p-8">
            <SelectCoins
              allCoins={allCoins}
              crypto1={crypto1}
              crypto2={crypto2}
              onCoinChange={onCoinChange}
              days={days}
              handleDaysChange={handleDaysChange}
              className="mb-6"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
                <List coin={coin1Data} />
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
                <List coin={coin2Data} />
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-8">
              <ToggleComponents
                priceType={priceType}
                handlePriceTypeChange={handlePriceTypeChange}
              />
              <LineChart chartData={chartData} multiAxis={true} />
            </div>
            <div className="flex flex-col space-y-4 ">
              <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md"><Info title={coin1Data.name} desc={coin1Data.desc} /></div>
              <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md"><Info title={coin2Data.name} desc={coin2Data.desc} /></div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Compare;
