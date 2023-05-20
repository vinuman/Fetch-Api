import { useState, useEffect } from "react";
import Table from "./Table";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      );
      const resultData = await response.json();
      setData(resultData);
    };
    getData();
  }, []);

  return (
    <div className="App">
      <h1>Fetch data contest</h1>
      <Table data={data} />
    </div>
  );
}

export default App;
