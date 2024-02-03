import React from "react";
import "./PriceCard.css";

const PriceCard = ({item}) => {
    return <div className="price-card">
        <h6>{item.title}</h6>
        <div className="price">{item.price}</div>
        <ul>
            {item.details.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
};

export default PriceCard;