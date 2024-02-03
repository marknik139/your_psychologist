import React, {useState} from "react";
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

    const handleSubmit = (e) => {
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
        // send email
        setFormData(prevState => ({
            ...prevState,
            firstname: "",
            lastname: "",
            email: "",
            message: "",
        }));
        alert("Сообщение успешно отправлено");
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
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Ваше сообщение *"
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