import React from 'react';
import { Carousel } from "react-bootstrap";

function importAll(r) {
    return r.keys().map(r);
}

const Images = importAll(require.context('../images/carousel', false, /\.(png|jpe?g|svg|webp)$/));

const Slider = () => {
    return (
        <Carousel>
            {Images.map((Image, key) => {
                return (
                    <Carousel.Item key={key}>
                        <img
                            className="d-block w-100 slide-img"
                            src={Image}
                            alt="First slide"
                        />
                    </Carousel.Item>
                );
            })}
        </Carousel >
    )
}

export default Slider;