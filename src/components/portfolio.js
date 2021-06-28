import React, {Component} from 'react';
import image1 from "../images/portfolios/portfolio00001.jpg";
import image2 from "../images/portfolios/portfolio00002.jpg";
import image3 from "../images/portfolios/portfolio00003.jpg";
import image4 from "../images/portfolios/portfolio00004.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearchPlus} from "@fortawesome/free-solid-svg-icons";
import {PopupboxManager, PopupboxContainer} from "react-popupbox"
import "react-popupbox/dist/react-popupbox.css"

class Portfolio extends Component {

    // React Popups
    openFirstPopup(){
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={image1}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse eum ipsam minima, molestiae neque
                    nesciunt
                    reprehenderit sapiente ut. Non, similique!</p>
                <b>Instagram: </b>
                <a className="hyper-link"
                   onClick={() => window.open("https://www.instagram.com")}>https://www.instagram.com</a>
            </>
        )
        PopupboxManager.open({content, config:{
                titleBar: {
                    enable: true,
                    text: "City Lights"
                },
                fadeIn: true,
                fadeInSpeed: 800
            }});
    }
    openSecondPopup(){
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={image2}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse eum ipsam minima, molestiae neque
                    nesciunt
                    reprehenderit sapiente ut. Non, similique!</p>
                <b>Instagram: </b>
                <a className="hyper-link"
                   onClick={() => window.open("https://www.instagram.com")}>https://www.instagram.com</a>
            </>
        )
        PopupboxManager.open({content, config:{
                titleBar: {
                    enable: true,
                    text: "Scenic Lake View"
                },
                fadeIn: true,
                fadeInSpeed: 800
            }});
    }
    openThirdPopup(){
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={image3}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse eum ipsam minima, molestiae neque
                    nesciunt
                    reprehenderit sapiente ut. Non, similique!</p>
                <b>Instagram: </b>
                <a className="hyper-link"
                   onClick={() => window.open("https://www.instagram.com")}>https://www.instagram.com</a>
            </>
        )
        PopupboxManager.open({content, config:{
                titleBar: {
                    enable: true,
                    text: "Kittens World"
                },
                fadeIn: true,
                fadeInSpeed: 800
            }});
    }
    openFourthPopup(){
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={image4}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse eum ipsam minima, molestiae neque
                    nesciunt
                    reprehenderit sapiente ut. Non, similique!</p>
                <b>Instagram: </b>
                <a className="hyper-link"
                   onClick={() => window.open("https://www.instagram.com")}>https://www.instagram.com</a>
            </>
        )
        PopupboxManager.open({content, config:{
                titleBar: {
                    enable: true,
                    text: "Nature's Beauty"
                },
                fadeIn: true,
                fadeInSpeed: 800
            }});
    }


    render() {
        return (
            <div id="portfolio" className="portfolio-wrapper">
                <div className="container">
                    <h1 className="text-uppercase py-5 text-center">
                        Portfolio
                    </h1>
                    <div className="image-box-wrapper row row-cols-auto justify-content-center">
                        <div className="portfolio-image-box" onClick={this.openFirstPopup}>
                            <img src={image1} alt="" className="portfolio-image"/>
                            <div className="overflow"></div>
                            <FontAwesomeIcon icon={faSearchPlus} className="portfolio-icon"/>
                        </div>
                        {/*    */}
                        <div className="portfolio-image-box" onClick={this.openSecondPopup}>
                            <img src={image2} alt="" className="portfolio-image"/>
                            <div className="overflow"></div>
                            <FontAwesomeIcon icon={faSearchPlus} className="portfolio-icon"/>
                        </div>
                        {/*    */}
                        <div className="portfolio-image-box" onClick={this.openThirdPopup}>
                            <img src={image3} alt="" className="portfolio-image"/>
                            <div className="overflow"></div>
                            <FontAwesomeIcon icon={faSearchPlus} className="portfolio-icon"/>
                        </div>
                        {/*    */}
                        <div className="portfolio-image-box" onClick={this.openFourthPopup}>
                            <img src={image4} alt="" className="portfolio-image"/>
                            <div className="overflow"></div>
                            <FontAwesomeIcon icon={faSearchPlus} className="portfolio-icon"/>
                        </div>
                        <PopupboxContainer />
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;