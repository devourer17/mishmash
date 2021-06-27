import React, {Component} from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import avatar1 from "../images/avatars/avatar-1.png";
import avatar2 from "../images/avatars/avatar-2.png";
import avatar3 from "../images/avatars/avatar-3.png";
import avatar4 from "../images/avatars/avatar-4.png";

class TestimonialCarousel extends Component {
    render() {
        return (
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={2000}
                showIndicators={false}
            >
                <>
                    <img src={avatar1} alt="Sonu Madaan"/>
                    <div className="my-carousel">
                        <h3>Sonu Madaan</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque corporis deleniti eos
                            fuga, hic libero minus nobis optio ullam.</p>
                    </div>
                </>
                <>
                    <img src={avatar2} alt="Mridula Narula"/>
                    <div className="my-carousel">
                        <h3>Mridula Narula</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque corporis deleniti eos
                            fuga, hic libero minus nobis optio ullam.</p>
                    </div>
                </>
                <>
                    <img src={avatar3} alt="SK Narula"/>
                    <div className="my-carousel">
                        <h3>SK Narula</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque corporis deleniti eos
                            fuga, hic libero minus nobis optio ullam.</p>
                    </div>
                </>
                <>
                    <img src={avatar4} alt="Sandeep Madaan"/>
                    <div className="my-carousel">
                        <h3>Sandeep Madaan</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque corporis deleniti eos
                            fuga, hic libero minus nobis optio ullam.</p>
                    </div>
                </>
            </Carousel>
        );
    }
}

export default TestimonialCarousel;