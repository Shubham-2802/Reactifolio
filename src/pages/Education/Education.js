import React,{ Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
//import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Education.css';
import Button from 'react-bootstrap/Button';

class Education extends Component{
	render(){
		return(
				<div className="main pt-3 pb-3 pl-3 w-100" id="education">
				    <h1 className="text-center font-details-b pb-4">EDUCATION</h1>
					<CardDeck>
						<Row className="justify-content-start">
							<Col xs="6" sm="4">
							  <Card className="focus mt-2 mb-2 shadow-1" border="success" style={{ width: '20rem' }}>
							    <Card.Body className="">
							     <Card.Title className="text-center  card-title">B.E</Card.Title>
					                <hr />
					                <Card.Text className="text-center card-text d-flex justify-content-start flex-column">
					                  <strong>SJB Institute of Technology</strong>
					                  <br/>
					                  <em>Year : 2016-2020</em>
					                  <em>Percentage : 77.50%</em>
					                </Card.Text>
					                <div className="button">
					    				<a href="https://drive.google.com/file/d/14F8DWXdRZfqnkrz5qDlT1TJKbnFFdrYP/view?usp=sharing" target="_blank" rel="noopener noreferrer">
					    					<Button className="m-2" variant="outline-success">View Marksheet</Button>
					    				</a>
					    			</div>
							    </Card.Body>
							  </Card>
							 </Col> 
							 <Col xs="6" sm="4">
							  <Card className="focus mt-2 mb-2" border="success" style={{ width: '20rem' }}>
							    <Card.Body>
							      <Card.Title className="text-center card-title">Senior Secondary(XII)</Card.Title>
							      <hr />
							      <Card.Text className="text-center card-text d-flex justify-content-start flex-column">
							        <strong>SKP Vidya Vihar</strong>
					                  <br/>
					                  <em>Year : 2015</em>
					                  <em>Percentage : 82.80%</em>
							      </Card.Text>
							      	<div className="button">
					    				<a href="https://drive.google.com/file/d/1sdZC6HOpZeD_uL741u-gZIVuuFFWgy5G/view?usp=sharing" target="_blank" rel="noopener noreferrer">
					    					<Button className="m-2" variant="outline-success">View Marksheet</Button>
					    				</a>
					    			</div>
							    </Card.Body> 
						      </Card>
						     </Col> 
							 <Col sm="4"> 
							  <Card className="focus mt-2 mb-2" border="success" style={{ width: '20rem' }}>
							    <Card.Body>
							      <Card.Title className="text-center card-title">Secondary(X)</Card.Title>
							      <hr />
							      <Card.Text className="text-center card-text d-flex justify-content-start flex-column">
							        <strong>St. Teresa's School</strong>
					                  <br/>
					                  <em>Year : 2013</em>
					                  <em>Percentage : 86.67%</em>
							      </Card.Text>
							      <div className="button">
					    				<a href="https://drive.google.com/file/d/1Gc7p6P7jR7TsICLk7lJQbo8TNPeZtiBY/view?usp=sharing" target="_blank" rel="noopener noreferrer">
					    					<Button className="m-2" variant="outline-success">View Marksheet</Button>
					    				</a>
					    			</div>
							    </Card.Body>
							  </Card>
							 </Col> 
						  </Row>
					</CardDeck>
				</div>
			);
	}
}

export default Education;