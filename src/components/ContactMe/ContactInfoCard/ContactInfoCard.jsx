import React from "react";
import "./ContactInfoCard.css"

const ContactInfoCard = ({iconUrl, text, href}) => {
    return (
        <div className="contact-details-card">
            <a className="icon" href={href}>
                <img src={iconUrl} alt="Кнопка связаться со мной"/>
            </a>
            <p>{text}</p>
        </div>
    )
};

export default ContactInfoCard;