import React, { useEffect, useState } from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Stocks from "./components/Stocks";
import Variables from "./components/Variables";
import StockSpanParser from "./components/StockSpanParser";

const App = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    const url = "https://fitpage4.free.beeceptor.com/fitpage4";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setStockData(data));
  }, []);

  return (
    <div className="main-container">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<StockSpanParser stockData={stockData} />}
          />
          <Route path="/stock/:id" element={<Stocks stockData={stockData} />} />
          <Route
            path="/criteria/:word"
            element={<Variables stockData={stockData} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
