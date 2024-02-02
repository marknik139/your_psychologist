import React from "react";
import "./ContactForm.css"

const ContactForm = () => {
    return (
        <div className="contact-form-content">
            <form>
                <div className="name-container">
                    <input type="text" name="firstname" placeholder="Ваше имя"/>
                    <input type="text" name="lastname" placeholder="Ваша фамилия"/>
                </div>
                <input type="text" name="email" placeholder="Email"/>
                <textarea type="text" name="message" placeholder="Ваше сообщение" rows={3}/>
                <button>Отправить</button>
            </form>
        </div>
    )
};

export default ContactForm;