import React, {Component} from 'react';

class ContactMe extends Component {
    render() {
        return (
            <div id="contactMe" className="contact-me">
                <h1>Contact Me</h1>
                <p>Please fill out this form with your project requirements and I'll contact you as soon as possible</p>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            <input id="name" type="text" className="form-control" placeholder="Your name..." name="name"/>
                            <input id="phone" type="text" className="form-control" placeholder="Your contact number..."
                                   phone="phone"/>
                            <input id="email" type="email" className="form-control" placeholder="Your email..." email="email"/>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <input id="title" type="text" className="form-control" placeholder="Project Title..." title="title"/>
                            <textarea id="description" type="text" className="form-control" placeholder="Project Description..." description="description    "/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <button className="submit-btn btn btn-light" type="submit">Submit</button>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </div>
        );
    }

}

export default ContactMe;