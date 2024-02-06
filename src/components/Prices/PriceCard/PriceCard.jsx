import React from "react";
import "./PriceCard.css";

const PriceCard = ({item, country}) => {
    return <div className="price-card">
        <h6>{item.title}</h6>
        <a href="#contacts" className="price">{country === 'IL' ? item.priceIL : item.priceRU}</a>
        <ul>
            {item.details.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
};

export default PriceCard;