import React,{ Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Contact.css';
import Button from 'react-bootstrap/Button';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import "http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css";

class Contact extends Component {
	render(){
		return(
				<div id="contacts">
				<div className="jumbo"><h1 className="text-center font-details-b pb-1">Contact</h1></div>
					<Jumbotron className="jumboattri">
					  <Row>
					  	<Col className="d-flex justify-content-center flex-wrap">
					  		<div className="m-2">
						  		<a href="mailto:kshubham.2802@gmail.com" target="_blank" rel="noopener noreferrer">
						  			<Button className="m-2" title="kshubham.2802@gmail.com" variant="outline-warning">
						  			 Email
						  			</Button>
						  		</a>
					  		</div>
					  		<div className="m-2">
						  		<a href="https://www.linkedin.com/in/shubham-kumar-002193190/" target="_blank" rel="noopener noreferrer">
						  			<Button className="m-2" title="Visit my LinkedIn Profile." variant="outline-info">
						  			<i className="fab fas-linkedin"></i> LinkedIn
						  			</Button>
						  		</a>
					  		</div>
					  		<div className="m-2">
						  		<a href="https://www.facebook.com/profile.php?id=100004204830094" target="_blank" rel="noopener noreferrer">
						  			<Button className="m-2" title="We can even talk on FB." variant="outline-success">
						  			<i className="fab fa-facebook-square"></i> Facebook
						  			</Button>
						  		</a>
					  		</div>
					  		<div className="m-2">
						  		<a href="https://www.instagram.com/shubham_2802/" target="_blank" rel="noopener noreferrer">
						  			<Button className="m-2" title="Insta is cool sometimes." variant="outline-danger">
						  			<i class="fab fa-instagram"></i>Instagram
						  			</Button>
						  		</a>
					  		</div>
					  		<div className="m-2">
						  		<a href="https://twitter.com/Shubham_0228" target="_blank" rel="noopener noreferrer">
						  			<Button className="m-2" title="Tweets are welcomed." variant="outline-info">
						  			<i className="fab fa-twitter"></i> Twitter
						  			</Button>
						  		</a>
					  		</div>
					  		<div className="m-2">
						  		<a href="">
						  			<Button className="m-2" title="+918095549859" variant="outline-dark" disabled>
						  			<i class="fas fa-phone"></i> Phone No.
						  			</Button>
						  		</a>
					  		</div>
					  	</Col>
					  </Row>
					</Jumbotron>

				</div>
			);
	}
}

export default Contact;