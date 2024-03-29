import React from "react";
import "./SkillsInfoCard.css"

const SkillsInfoCard = ({heading, skills}) => {
    return (
        <div className="skills-info-card">
            <h5>{heading}</h5>
            <div className="skills-info-content">
                <div className="skills-subtitle">
                    <h6>Из чего состоит мой подход?</h6>
                </div>
                {skills.map((item, index) => (
                    <div className="skill-item" key={`skill_${index}`}>
                        <div className="skill-info">
                            <p>{item.skill}</p>
                            <p className="percentage">{item.percentage}</p>
                        </div>

                        <div className="skill-progress-bg">
                            <div className="skill-progress" style={{width: item.percentage}}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default SkillsInfoCard;