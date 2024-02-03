import React from "react";
import "./Prices.css";
import {PRICES} from "../../utils/data";
import PriceCard from "./PriceCard/PriceCard";

const Prices = () => {
    return (
        <section className="prices-container" id="prices">
            <h5>Цены</h5>
            <div className="prices-content">
                {PRICES.map((item) => (
                    <PriceCard key={item.title} item={item}/>
                ))}
            </div>
        </section>
    )
}

export default Prices;