import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaintBrush, faGifts, faPortrait, faAddressCard} from "@fortawesome/free-solid-svg-icons";

class Services extends Component {
    render() {
        return (
            <div className="services">
                <h2 className="py-5">My Services</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="service-icon" icon={faGifts}
                                                     size="3x"></FontAwesomeIcon>
                                </div>
                                <h3>Greeting Cards</h3>
                                <p>Get custom crafted greeting cards for your friends, family and loved ones</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="service-icon" icon={faPaintBrush}
                                                     size="3x"></FontAwesomeIcon>
                                </div>
                                <h3>Decor Wallpapers</h3>
                                <p>Home Decor Wallpapers that brings grace to your walls</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="service-icon" icon={faPortrait}
                                                     size="3x"></FontAwesomeIcon>
                                </div>
                                <h3>Photo Frames</h3>
                                <p>Calligraphy Photo Frames that lightens up your home decor</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="service-icon" icon={faAddressCard}
                                                     size="3x"></FontAwesomeIcon>
                                </div>
                                <h3>Envelopes</h3>
                                <p>Personalized envelopes in fancy letters when you need to make
                                    an impression</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;