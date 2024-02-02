import React, {useRef} from "react";
import "./Education.css"
import {EDUCATION} from "../../utils/data";
import EducationCard from "./EducationCard/EducationCard";
import Slider from "react-slick";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Education = () => {

    const sliderRef = useRef();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const slideRight = () => {
        sliderRef.current.slickNext();
    };
    const slideLeft = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <section className="education-container">
            <h5>Моё образование</h5>
            <div className="education-content">
                <div className="arrow-right" onClick={slideRight}>
                    <ChevronRightIcon/>
                </div>
                <div className="arrow-left" onClick={slideLeft}>
                    <ChevronLeftIcon/>
                </div>
                <Slider ref={sliderRef} {...settings}>
                    {EDUCATION.map((item) => (
                        <EducationCard key={item.title} details={item}/>
                    ))}
                </Slider>
            </div>
        </section>
    )
}
export default Education;