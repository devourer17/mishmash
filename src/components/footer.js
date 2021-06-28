import React, {Component} from 'react';
import {Link} from "react-scroll";

import {
    FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon,
    TwitterShareButton,
    TwitterIcon,
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TelegramShareButton,
    TelegramIcon,
    RedditShareButton,
    RedditIcon
} from "react-share";

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="d-flex">
                                <a href="https://goo.gl/maps/qvnaWjdt7QL47HUc6" target="_blank"
                                   rel="noopener noreferrer">HUDA City Center, Sector 29, Gurgaon, Haryana</a>
                            </div>
                            <div className="d-flex">
                                <a href="tel:+91-9999999999">+91-9999999999</a>
                            </div>
                            <div className="d-flex">
                                <a href="mailto:mishmashgurl@gmail.com">mishmashgurl@gmail.com</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2 col-sm-6">
                            <div className="row">
                                <div className="col">
                                    <Link to="myHeader" className="footer-nav">Home</Link>
                                    <br/>
                                    <Link to="aboutMe" className="footer-nav">About Me</Link>
                                    <br/>
                                    <Link to="services" className="footer-nav">Services</Link>
                                </div>
                                <div className="col">
                                    <Link to="experiences" className="footer-nav">Experience</Link>
                                    <br/>
                                    <Link to="portfolio" className="footer-nav">Portfolio</Link>
                                    <br/>
                                    <Link to="testimonials" className="footer-nav">Testimonials</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                            <div className="d-flex justify-content-center my-share-icons">
                                <FacebookShareButton
                                    url={"https://www.facebook.com/mishmashgurl"}
                                    quote={"Watch out my calligraphy artwork!!"}
                                    hastag="#calligraphy"
                                >
                                    <FacebookIcon className="mx-3" size={36}></FacebookIcon>
                                </FacebookShareButton>
                                <TwitterShareButton
                                    url={"https://www.facebook.com/mishmashgurl"}
                                    quote={"Watch out my calligraphy artwork!!"}
                                    hastag="#calligraphy"
                                >
                                    <TwitterIcon className="mx-3" size={36}></TwitterIcon>
                                </TwitterShareButton>
                                <WhatsappShareButton
                                    url={"https://www.facebook.com/mishmashgurl"}
                                    quote={"Watch out my calligraphy artwork!!"}
                                    hastag="#calligraphy"
                                >
                                    <WhatsappIcon className="mx-3" size={36}></WhatsappIcon>
                                </WhatsappShareButton>
                                <FacebookMessengerShareButton
                                    url={"https://www.facebook.com/mishmashgurl"}
                                    quote={"Watch out my calligraphy artwork!!"}
                                    hastag="#calligraphy"
                                >
                                    <FacebookMessengerIcon className="mx-3" size={36}></FacebookMessengerIcon>
                                </FacebookMessengerShareButton>
                                <RedditShareButton
                                    url={"https://www.facebook.com/mishmashgurl"}
                                    quote={"Watch out my calligraphy artwork!!"}
                                    hastag="#calligraphy"
                                >
                                    <RedditIcon className="mx-3" size={36}></RedditIcon>
                                </RedditShareButton>
                                <TelegramShareButton
                                    url={"https://www.facebook.com/mishmashgurl"}
                                    quote={"Watch out my calligraphy artwork!!"}
                                    hastag="#calligraphy"
                                >
                                    <TelegramIcon className="mx-3" size={36}></TelegramIcon>
                                </TelegramShareButton>
                                <LinkedinShareButton
                                    url={"https://www.facebook.com/mishmashgurl"}
                                    quote={"Watch out my calligraphy artwork!!"}
                                    hastag="#calligraphy"
                                >
                                    <LinkedinIcon className="mx-3" size={36}></LinkedinIcon>
                                </LinkedinShareButton>
                            </div>
                            <p className="pt-3 text-center style='color:grey'">
                                Copyright&copy;
                                {new Date().getFullYear()}&nbsp;MishMashGurl | All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;