import React,{ Component } from "react";
import "./App.css";
import Container from 'react-bootstrap/Container';
import Particles from 'react-particles-js';
import Navigation from "./components/Navigation/Navigation";
import Carousal from "./components/Carousal/Carousal";
import Titlemessage from "./components/Titlemessage/Titlemessage";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Education from "./pages/Education/Education";
import Slide from "react-reveal/Slide";
import {Parallax} from 'react-parallax';
import Fade from 'react-reveal/Fade';

const particlepara = {
                 "particles": {
                      "number": {
                          "value": 80
                      },
                      "size": {
                          "value": 3
                      }
                  },
                  "interactivity": {
                      "events": {
                          "onhover": {
                              "enable": true,
                              "mode": "repulse"
                          }
                      }
                  }
              }


class App extends Component {
  render(){
      return (
      <div className="App">
        <Particles className="particles"
                   params={particlepara}
        />
        <Navigation/>
        <Carousal/>
        <Titlemessage/>
        <hr/>
        <div>
	        <Parallax blur={{ min: -30, max: 30 }}
			          bgImage={require("./assets/img/parallex/bg3.jpg")}
			          bgImageAlt=""
			          strength={-200}>
			    <div>      
		        	<Container className="container-box rounded">
			        	<Fade duration={500}>
			        		<About/>
			        	</Fade>
		        	</Container>
	        	</div>
	        </Parallax>
        </div>
        <hr/>
        <div>
	        <Parallax blur={{ min: -30, max: 30 }}
			          bgImage={require("./assets/img/parallex/background2.jpg")}
			          bgImageAlt=""
			          strength={-200}>
			    <div>      
		        	<Container className="container-box rounded">
			        	<Fade duration={500}>
			        		<Education/>
			        	</Fade>
		        	</Container>
	        	</div>
	        </Parallax>
        </div>
        <hr/>
        <div>
	        <Parallax blur={{ min: -30, max: 30 }}
			          bgImage={require("./assets/img/parallex/background2.jpg")}
			          bgImageAlt=""
			          strength={-200}>
			    <div>      
		        	<Container className="container-box rounded">
			        	<Fade duration={500}>
			        		<Skills/>
			        	</Fade>
		        	</Container>
	        	</div>
	        </Parallax>
        </div>Container>
      </div>
    );
  }
}

export default App;
