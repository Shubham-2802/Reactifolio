import React,{ Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tilt from 'react-tilt';
import Image from 'react-bootstrap/Image';
import Profile from '../../assets/img/profile/profile.JPG';
import './About.css';
import Button from 'react-bootstrap/Button';

class About extends Component {
	render(){
		return(
		<div id="about">	
			<div className="about">
				<div className="jumbo"><h1 className="pt-1 text-center font-details pb-1">ABOUT ME</h1></div>
				<Container>
				  <Row className="pt-3 pb-5 align-items-center">
				    <Col xs={12} md={5}>
				    	<Row className="justify-content-center mb-2 mr-2">
				    			<Tilt options={{ max : 30 }}>
				        			<div>
				          				<Image className="profile justify-content-end" alt="profile" src={Profile} roundedCircle />
				        			</div>
				      			</Tilt>
				    	</Row>
				    </Col>
				    <Col xs={12} md={7}>
				    	<Row className=" align-items-start p-3 my-details rounded">
					    	Hi there! I am <strong>&nbsp;Shubham Kumar</strong>
			                <br />A passionate techie born and brought up in Bihar,India. I am a Full Stack Web Developer with React.js, Express.js, Node.js, and PostgreSQL as my tech stack.
			                <br />
			                In 2020, I successfully completed my Engineering with specialization in 'Computer Science & Engineering' from SJB Institute of Technology, a VTU affiliated college in Bengaluru.
			                <br />
			                Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them. I am honest,self-motivated and hardworking guy with a positive attitude towards work and life.
			                <br />
			                
			                <br /> <br />
				    		<Col className="d-flex justify-content-center flex-wrap">
				    			<div>
				    				<a href="#contacts">
				    					<Button className="m-2" variant="outline-warning">Contact</Button>
				    				</a>
				    			</div>
				    			<div>
				    				<a href="https://drive.google.com/file/d/1guaOpX4P11AqZJ0YpwlO68roz_FihniN/view?usp=sharing" target="_blank" rel="noopener noreferrer">
				    					<Button className="m-2" variant="outline-danger">My Resume</Button>
				    				</a>
				    			</div>
				    			<div>
				    				<a href="https://www.linkedin.com/in/shubham-kumar-002193190/" target="_blank" rel="noopener noreferrer">
				    					<Button className="m-2" variant="outline-info">LinkedIn</Button>
				    				</a>
				    			</div>
				    			<div>
				    				<a href="https://github.com/Shubham-2802" target="_blank" rel="noopener noreferrer">
				    					<Button className="m-2" variant="outline-success">Github</Button>
				    				</a>
				    			</div>
				    		</Col>
				    	</Row>
				    </Col>
				  </Row>
				</Container>
			</div>
			</div>
			);
	}
}

export default About;