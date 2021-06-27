import React, {Component} from 'react';
import TestimonialCarousel from "./testimonialCarousel";

class Testimonials extends Component {
    render() {
        return (
            <div className="testimonials">
                <h1>My Happy Clients</h1>
                <div className="container">
                    <div className="testimonial-content">
                        <TestimonialCarousel/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Testimonials;