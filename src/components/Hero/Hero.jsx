import React from "react";
import "./Hero.css";
const Hero = () => {
    return (
        <section className="hero-container" id="hero">
            <div className="hero-content">
                <h2>Ваш психолог</h2>
                <p>
                    Здравствуйте! Меня зовут Мария. Я являюсь практикующим психологом, специализирующимся в клинической психологии.
                    Моя задача - поддерживать вас на пути к преодолению эмоциональных трудностей и
                    достижению гармонии в психологическом благополучии.
                    С радостью готова помочь вам на этом важном пути
                </p>
            </div>

            <div className="hero-img">
                <div>
                    <div className="tech-icon">
                        <img src="./assets/images/leaf.svg" alt="tech-icon"/>
                    </div>
                    <img src="./assets/images/hero-avatar.png" alt="hero-avatar"/>
                </div>

                <div>
                    <div className="tech-icon">
                        <img src="./assets/images/book.svg" alt="tech-icon"/>
                    </div>
                    <div className="tech-icon">
                        <img src="./assets/images/work.svg" alt="tech-icon"/>
                    </div>
                    <div className="tech-icon">
                        <img src="./assets/images/brain.svg" alt="tech-icon"/>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Hero;