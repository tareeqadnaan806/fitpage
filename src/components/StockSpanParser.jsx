import React from "react";
import { Link } from "react-router-dom";
import ".././index.css";

const StockSpanParser = ({ stockData }) => {
  return (
    <div className="container">
      {stockData.map((stock) => {
        const { name, tag, id, color } = stock;
        return (
          <div key={id}>
            <Link to={`/stock/${id}`} className="custom-link">
              <div className="p-2 border-dotted border-b-2 cursor-pointer underline">
                <h5 className="text-sm ">{name}</h5>
                <h6 style={{ color: `${color}` }} className="text-xs ">
                  {tag}
                </h6>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default StockSpanParser;
