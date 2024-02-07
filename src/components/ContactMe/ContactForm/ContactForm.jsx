import React, {useState} from "react";
import axios from 'axios';
import "./ContactForm.css"

const ContactForm = () => {

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const generateMessage = (formData) => (
    `Сообщение от ${formData.firstname} ${formData.lastname}\n
    Дата и время по Израилю:
    ${getCurrentDateTimeIsrael()}\n
    Email для обратной связи:
    ${formData.email}\n
    Сообщение:
    \r${formData.message}`
    );

    const getCurrentDateTimeIsrael = () => {
        const currentDate = new Date();
        const options = {
            timeZone: 'Israel',
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        };
        return currentDate.toLocaleString('en-IL', options);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.firstname.trim() === "" || formData.lastname.trim() === "" || formData.email.trim() === "" || formData.message.trim() === "") {
            alert("Пожалуйста заполните все поля формы");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert("Пожалуйста введите корректный адрес электронной почты");
            return;
        }
        setFormData(prevState => ({
            ...prevState,
            firstname: "",
            lastname: "",
            email: "",
            message: "",
        }));
        try {
            const message = generateMessage(formData);
            await sendMessageToTelegram(message);
            alert("Сообщение успешно отправлено");
        } catch (e) {
            alert(e.message)
        }
    };

    const sendMessageToTelegram = async (message) => {
        try {
            const API_TOKEN = process.env.REACT_APP_BOT_TOKEN;
            const CHAT_ID = process.env.REACT_APP_CHAT_ID;

            const url = `https://api.telegram.org/bot${API_TOKEN}/sendMessage`;
            const data = {
                chat_id: CHAT_ID,
                text: message,
            };
            await axios.post(url, data);
        } catch (e) {
            throw new Error('Произошла ошибка при отправке сообщения');
        }
    };


    return (
        <div className="contact-form-content">
            <form onSubmit={handleSubmit}>
                <div className="name-container">
                    <input
                        type="text"
                        name="firstname"
                        placeholder="Ваше имя *"
                        value={formData.firstname}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="lastname"
                        placeholder="Ваша фамилия *"
                        value={formData.lastname}
                        onChange={handleChange}
                        required
                    />
                </div>
                <input
                    type="email"
                    name="email"
                    placeholder="Ваш Email для обратной связи *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Ваше сообщение в свободной форме *"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Отправить</button>
            </form>
        </div>
    )
};

export default ContactForm;