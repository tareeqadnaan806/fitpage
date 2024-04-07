// stocks.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";

const Stocks = ({ stockData }) => {
  const { id } = useParams();
  const stock = stockData.find((item) => item.id === parseInt(id));

  if (!stock) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="criteria">
        <h5 className="text-sm">{stock.name}</h5>
        <h6 className="text-xs" style={{ color: stock.color }}>
          {stock.tag}
        </h6>
      </div>
      <div className="p-3">
        {stock.criteria.map((text, index) => (
          <div key={index}>
            {index > 0 && <span className="text-xs">and </span>}
            <p>
              {text.text.split("$").map((part, idx) => {
                if (idx === 0) {
                  return <React.Fragment key={idx}>{part}</React.Fragment>;
                } else {
                  const [word, rest] = part.split(" ");
                  return (
                    <React.Fragment key={idx}>
                      <Link
                        to={`/criteria/${word}`}
                        style={{ textDecoration: "underline" }}
                      >
                        ${word && `(${word})`}
                      </Link>{" "}
                      {rest && rest}
                    </React.Fragment>
                  );
                }
              })}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stocks;
