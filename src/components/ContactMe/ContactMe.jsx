import React from "react";
import "./ContactMe.css"
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe =  () => {
    return (
        <section className="contact-container">
            <h5>Напишите мне</h5>
            <div className="contact-content">
                <div style={{flex: 1}}>
                    <ContactInfoCard
                        iconUrl="./assets/images/mail.svg"
                        text="mariayuzefov@gmail.com"
                    />
                    <ContactInfoCard
                        iconUrl="./assets/images/telegram.svg"
                        text="@mariayuzefov"
                    />
                </div>
                <div style={{flex: 1}}>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
};

export default ContactMe;