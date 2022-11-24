import React from 'react';
import './Carousel.css'
import Images from "./Images";
import Buttons from "./Buttons";
import Dots from "./Dots";

function Carousel(props) {
    return (
        <div className="carousel">
            <Images/>
            <Buttons/>
            <Dots/>
        </div>
    );
}

export default Carousel;