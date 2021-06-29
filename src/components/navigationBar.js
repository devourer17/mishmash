import React, {Component} from 'react';
import siteLogo from "../images/logo.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-scroll";

class NavigationBar extends Component {
    render() {
        return (
            <nav id="myHeader" className="navbar navbar-expand-lg navbar-light navCustom">
                <div className="container">
                    <a className="navbar-brand" href="#"><img className="menuLogo" src={siteLogo}/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars}/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link to="myHeader" className="nav-link" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="aboutMe" className="nav-link" href="#">About Me</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="services" className="nav-link" href="#">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="experiences" className="nav-link" href="#">Experience</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="portfolio" className="nav-link" href="#">Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="testimonials" className="nav-link" href="#">Testimonials</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="contactMe" className="nav-link" href="#">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavigationBar;