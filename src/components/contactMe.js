import React, {Component} from 'react';
import emailjs from "emailjs-com";

class ContactMe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messageBody: ""
        }
    }

    // componentDidMount(e){
    //     this.sendEmail(e).then((response) => {
    //         this.setState({messageBody : "I'll contact you asap"})
    //     })
    // }

    sendEmail(e) {
        emailjs.sendForm('service_9d3h02c', 'template_ldond9a', e.target, 'user_f30H11mTflNiEmd7FW2Yw')
            .then((result) => {
                console.log(result.text + '  ' + result.status);
            }, (error) => {
                console.log(error.text);
                //this.setState({messageBody : "Something went wrong..."})
            });
    }

    render() {
        return (
            <div id="contactMe" className="contact-me">
                <h1>Contact Me</h1>
                <p>Please fill out this form with your project requirements and I'll contact you as soon as possible</p>
                <p>{this.state.messageBody}</p>
                <div className="container">
                    <form onSubmit={this.sendEmail}>
                        <div className="row">
                            <div className="col-md-6 col-xs-12">
                                <input id="name" type="text" className="form-control" placeholder="Your name..."
                                       name="name"/>
                                <input id="phone" type="text" className="form-control"
                                       placeholder="Your contact number..."
                                       name="phone"/>
                                <input id="email" type="email" className="form-control" placeholder="Your email..."
                                       name="email"/>
                            </div>
                            <div className="col-md-6 col-xs-12">
                                <input id="title" type="text" className="form-control" placeholder="Project Title..."
                                       name="title"/>
                                <textarea id="description" type="text" className="form-control"
                                          placeholder="Project Description..." name="description"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="col-md-4">
                                <button className="submit-btn btn btn-light" type="submit">Submit</button>
                            </div>
                            <div className="col-md-4"></div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}

export default ContactMe;