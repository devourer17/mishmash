import React, {Component} from 'react';
import author from "../images/author.jpg"

class AboutMe extends Component {
    render() {
        return (
            <div id="aboutMe" className="container py-5">
                <div className="row">
                    <div className="col-lg-6 com-xm-12">
                        <div className="photo-wrap">
                            <img className="profile-img" src={author} alt="Author..."/>
                        </div>
                    </div>
                    <div className="col-lg-6 com-xm-12">
                        <h1 className="about-heading">About Me</h1>
                        <p className="about-content">
                            The “about us” page is a must-have page (this can be a page on your website, separate
                            landing page or even “about me” website as a type of portfolio) used by all types of
                            businesses to give customers more insight into who is involved with a given business and
                            exactly what it does.

                            Your “About me” page forms the first impression of a company or product, puts a name and a
                            face to your business, and gives website visitor the opportunity to develop a connection
                            with you (a good reason for a visitor to stay on your website!), and it is your best chance
                            to convert more visits to enquiries/more enquiries to customers.

                            About me page is a space for individuality and originality, it is an important marketing
                            tool that should convince. Therefore, they are very different!

                            Let’s get the best of the top About us samples and learn how to write about me page, that
                            will pull your customers like a magnet.
                            Frank and convincing copy, credible reviews, high-quality natural photos, calm shades, and
                            an abstract background that does not distract you from the essence – this is the formula for
                            the success of this page.

                            You won’t confuse Sarah’s site with anyone else’s… Wanna know a little secret? Weblium
                            editor offers the advanced template customization options, so you can modify any blocks,
                            completely change the design of every tiniest element of your future website. That’s it, you
                            will get your unique website for absolutely free!
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;