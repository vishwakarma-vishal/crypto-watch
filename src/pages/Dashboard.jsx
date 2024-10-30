import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../components/Common/Loader";
import TopButton from "../components/Common/TopButton";
import Search from "../components/Dashboard/Search";
import TabsComponent from "../components/Dashboard/TabsComponent";
import PaginationControlled from "../components/Dashboard/Pagination"; // Ensure correct import path

function Dashboard() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setLoading(true);
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        setCoins(response.data);
        setPaginatedCoins(response.data.slice(0, 12));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message);
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.trim().toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.trim().toLowerCase())
  );

  const handlePageChange = (value) => {
    setPage(value);
    const initialCount = (value - 1) * 12;
    setPaginatedCoins(coins.slice(initialCount, initialCount + 12));
  };

  // Calculate total pages for pagination
  const totalPages = Math.ceil(coins.length / 10);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow bg-gray-100 dark:bg-gray-800 p-4 sm:p-6 lg:p-8">
        {loading ? (
          <Loader />
        ) : (
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Search
              search={search}
              handleChange={handleChange}
              className="mb-4"
            />
            <TabsComponent
              coins={search ? filteredCoins : paginatedCoins}
              setSearch={setSearch}
            />
            {!search && (
              <PaginationControlled
                page={page}
                handlePageChange={handlePageChange}
                totalPages={totalPages} // Pass totalPages prop
              />
            )}
          </div>
        )}
      </div>
      <TopButton />
    </div>
  );
}

export default Dashboard;
