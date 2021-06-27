
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/navigationBar";
import LandingPage from "./components/landingPage";
import Particles from 'react-particles-js'
import AboutMe from "./components/aboutMe";
import Services from "./components/services";
import Experience from "./components/experience";
import Portfolio from "./components/portfolio";
import Testimonial from "./components/testimonials";

function App() {
  return (
    <div className="App">
        <>
            <Particles
                params={{
                    particles:{
                        number:{
                            value: 30,
                            density: {
                                enable: true
                            }
                        },
                        shape:{
                            type: "circle",
                            stroke: {
                                width: 5,
                                color: "#ffffff"
                            }
                        }
                    }
                }}
            />
            <NavigationBar/>
            <LandingPage/>
            <AboutMe/>
            <Services/>
            <Experience/>
            <Portfolio/>
            <Testimonial/>
        </>
    </div>
  );
}

export default App;
