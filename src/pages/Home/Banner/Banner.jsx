import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Banner = () => {
    return (
            <Carousel>
                <div>
                    <img src="https://i.ibb.co/1tSQbvFd/b3.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/VbxWKfC/b2.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/VbxWKfC/b3.png" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    );
};

export default Banner;