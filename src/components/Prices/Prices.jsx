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
            const geoIpAddress = process.env.REACT_APP_GEO_IP;
            try {
                let res = await axios.get(`https://ipinfo.io/${geoIpAddress}?token=${geoToken}`);
                setCountry(res.data.country);
            } catch (e) {
                console.error(e);
            }
        }
        fetchMyAPI()
    }, []);

    return (
        <section className="prices-container" id="prices">
            <h5>Цены</h5>
            <div className="prices-content">
                {PRICES.map((item) => (
                    <PriceCard key={item.title} item={item} country={country}/>
                ))}
            </div>
        </section>
    )
}

export default Prices;