import React from "react";
import axios from 'axios'
import fileDownload from 'js-file-download'
import './EducationCard.css';

const EducationCard = ({details}) => {

    const handleDownload = (url, filename) => {
        axios.get(url, {
            responseType: 'blob',
        }).then((res) => {
                fileDownload(res.data, filename)
        })
    }

    return (
        <div className="education-card">
            <h6>{details.title}</h6>
            <div
                onClick={() => handleDownload(details.url, `${details.title.split(' ').join('_')}.png`)}
                className="education-duration"
            >
                {`Скачать диплом от ${details.date}`}
            </div>
            <ul>
                {details.description.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
};

export default EducationCard;