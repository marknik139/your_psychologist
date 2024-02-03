import React from "react";
import "./Prices.css";
import {PRICES} from "../../utils/data";
import PriceCard from "./PriceCard/PriceCard";

const Prices = () => {
    return (
        <section className="prices-container">
            <h5>Цены</h5>
            <div className="prices-content">
                {PRICES.map((item) => (
                    <PriceCard item={item}/>
                ))}
            </div>
        </section>
    )
}

export default Prices;