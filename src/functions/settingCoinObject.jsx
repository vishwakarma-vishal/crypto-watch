const settingCoinObject = (data, setCoin) => {
  if (data && data.id && data.name && data.symbol && data.image && data.image.large && data.description && data.description.en && data.market_data) {
    setCoin({
      id: data.id,
      name: data.name,
      symbol: data.symbol,
      image: data.image.large,
      desc: data.description.en,
      price_change_percentage_24h: data.market_data.price_change_percentage_24h,
      total_volume: data.market_data.total_volume?.usd || 0,  // Default to 0 if usd is not available
      current_price: data.market_data.current_price?.usd || 0, // Default to 0 if usd is not available
      market_cap: data.market_data.market_cap?.usd || 0, // Default to 0 if usd is not available
    });
  } else {
    console.error('Invalid data:', data);
    // Handle the case where data is invalid
    setCoin({
      id: '',
      name: '',
      symbol: '',
      image: '',
      desc: '',
      price_change_percentage_24h: 0,
      total_volume: 0,
      current_price: 0,
      market_cap: 0,
    });
  }
};

export default settingCoinObject;
