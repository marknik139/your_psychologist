import React, {useEffect, useState} from "react";
import "./Prices.css";
import {PRICES} from "../../utils/data";
import PriceCard from "./PriceCard/PriceCard";
import axios from "axios";

const Prices = () => {

    const [country, setCountry] = useState('RU');

    useEffect(() => {
        async function fetchMyAPI() {
            const geoToken = process.env.REACT_APP_GEO_TOKEN;
            try {
                const {data: {ip}} = await axios.get('https://api.ipify.org?format=json');
                if (ip) {
                    const {data: {country}} = await axios.get(`https://ipinfo.io/${ip}?token=${geoToken}`);
                    setCountry(country);
                }
            } catch (e) {
                console.error(e);
            }
        }
        fetchMyAPI();
    }, []);

    return (
        <section className="prices-container" id="prices">
            <h5>Цены</h5>
            <div className="prices-content">
                {PRICES.map((item, index) => (
                    <PriceCard key={item.title} item={item} index={index} country={country}/>
                ))}
            </div>
        </section>
    )
}

export default Prices;