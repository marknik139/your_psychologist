import React from "react";
import "./Hero.css";
const Hero = () => {
    return (
        <section className="hero-container" id="hero">
            <div className="hero-content">
                <h4>Уютный психолог</h4>
                <p>
                    Здравствуйте! Меня зовут Мария. Я практикующий психолог, специализирующийся в клинической психологии.
                    Моя задача - поддерживать вас на пути к преодолению эмоциональных трудностей и
                    достижению гармонии в психологическом благополучии.
                    С радостью готова помочь вам на этом важном пути
                </p>
            </div>

            <div className="hero-img">
                <div>
                    <img src="./assets/images/hero-avatar.png" alt="Фотография психолога"/>
                </div>
            </div>
        </section>
    )
};

export default Hero;