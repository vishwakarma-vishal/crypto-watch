import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Common/Loader";
import List from "../components/Dashboard/CardLayout/List";
import SelectDays from "../components/CoinPage/SelectDays";
import ToggleComponents from "../components/CoinPage/ToggleComponent";
import LineChart from "../components/CoinPage/LineChart";
import Info from "../components/CoinPage/Info";
import Button from "../components/Common/Button";

import getCoinData from "../functions/getCoinData";
import getPrices from "../functions/getPrices";
import settingChartData from "../functions/settingChartData";
import settingCoinObject from "../functions/settingCoinObject";

function Coin() {
  const { id } = useParams();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState({ labels: [], datasets: [{}] });
  const [coin, setCoin] = useState({});
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("prices");

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  const getData = async () => {
    setLoading(true);
    let coinData = await getCoinData(id, setError);
    settingCoinObject(coinData, setCoin);
    if (coinData) {
      const prices = await getPrices(id, days, priceType, setError);
      if (prices) {
        settingChartData(setChartData, prices);
        setLoading(false);
      }
    }
  };

  const handleDaysChange = async (event) => {
    setLoading(true);
    setDays(event.target.value);
    const prices = await getPrices(id, event.target.value, priceType, setError);
    if (prices) {
      settingChartData(setChartData, prices);
      setLoading(false);
    }
  };

  const handlePriceTypeChange = async (event) => {
    setLoading(true);
    setPriceType(event.target.value);
    const prices = await getPrices(id, days, event.target.value, setError);
    if (prices) {
      settingChartData(setChartData, prices);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {!error && !loading && coin.id ? (
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="w-full bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md mb-6">
            <List coin={coin} delay={0.5} />
          </div>
          <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md mb-6">
            <SelectDays handleDaysChange={handleDaysChange} days={days} />
            <ToggleComponents
              priceType={priceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />
            <div className="mt-4">
              <LineChart chartData={chartData} multiAxis={true} />
            </div>
          </div>
          <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <Info title={coin.name} desc={coin.desc} />
          </div>
        </div>
      ) : error ? (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <h1 className="text-2xl font-semibold text-center mb-4">
            Sorry, Couldn't find the coin you're looking for 😞
          </h1>
          <div className="mt-4">
            <a href="/dashboard">
              <Button text="Dashboard" />
            </a>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Coin;
