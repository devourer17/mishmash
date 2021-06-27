import React, {Component} from 'react';
import Typed from 'react-typed'

class LandingPage extends Component {
    render() {
        return (
            <div className="header-wrapper">
                <div className="main-info">
                    <h1>Calligraphy Portfolio</h1>
                    <Typed
                        className="typed-text"
                        strings={["Calligraphy", "Hand Lettering", "Fonts", "Designing", "Styling", "Shadowing", "Stroke", "Hairline", "Counter"]}
                        loop={true}
                        typeSpeed={40}
                        backSpeed={60}
                    />
                </div>
            </div>
        );
    }
}

export default LandingPage;