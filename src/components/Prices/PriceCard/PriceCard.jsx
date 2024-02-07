import React from "react";
import "./PriceCard.css";

const PriceCard = ({item, index, country}) => {
    return <div className="price-card">
        <h6>{item.title}</h6>
        <a href="#contacts" className={`price ${index === 2 ? 'most-expensive' : ''}`}>{country === 'IL' ? item.priceIL : item.priceRU}</a>
        <ul>
            {item.details.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
};

export default PriceCard;