import React,{ Component } from 'react';
import Typewriter from 'typewriter-effect';
import styled from "styled-components";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -80px;
  text-align: center;

  strong {
    font-size: 1.25em;
  }
  div {
    
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;

    .main {
      color: #60069B;
      font-size: 50px;
    }

    .sub {
      font-size: 27px;
      letter-spacing: 2px;
      color:#FF5733;
    }
  }
`;

class Titlemessage extends Component {
	render() {
		return(
			<MyTitleMessage>
				<div className="titleMessage">
			      <div className="heading">
			        <div className="text-center mb-3">
			          Hi, I am
			          <br />
			          <span>
			            <strong>Shubham Kumar</strong>
			          </span>
			        </div>
			        <div className="sub">
			          <Typewriter
			            options={{
			              strings: ["Web Developer", "Blockchain Enthusiast", "Learner"],
			              autoStart: true,
			              loop: true,
			              delay: 50
			            }}
			          />
			        </div>
			      </div>
			    </div>
			</MyTitleMessage>
			);
	}
}

export default Titlemessage;