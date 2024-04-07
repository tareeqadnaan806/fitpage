import { useParams } from "react-router-dom";
import React from "react";

const Variables = ({ stockData }) => {
  const { word } = useParams();

  return (
    <div className="container">
      {stockData.map(
        (stockItem) =>
          stockItem.criteria &&
          Array.isArray(stockItem.criteria) &&
          stockItem.criteria.map(
            (criterion) =>
              criterion.variable &&
              criterion.variable[`$${word}`] &&
              criterion.variable[`$${word}`].values &&
              criterion.variable[`$${word}`].values.map((value, type) => {
                return (
                  <div>
                    <h3 className="border-b-2 p-1 border-dotted">{value}</h3>
                  </div>
                );
              })
          )
      )}
    </div>
  );
};

export default Variables;
