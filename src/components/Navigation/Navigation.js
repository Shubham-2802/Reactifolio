import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import 'bootstrap/dist/css/bootstrap.css';
import Logo from "../../assets/icons/logow.webp";
import "./Navigation.css";

class Navigation extends Component {
	render() {
		return(
			<div>
			<Navbar fixed="top"
			        variant="dark"
			        expand="md"
			        className="animate-navbar nav-theme justify-content-between">
				  <div>
					  <Navbar.Brand href="#home">
						  <img
					        src={Logo}
					        className="logo"
					        alt="My logo"
					      />
					  </Navbar.Brand>
				  </div>
				  <div>
					  <Navbar.Toggle aria-controls="basic-navbar-nav" />
					  <Navbar.Collapse id="basic-navbar-nav">
					    <Nav className="mr-auto">
					      <Nav.Link href="#home">Home</Nav.Link>
					      <Nav.Link href="#about">About</Nav.Link>
					      <Nav.Link href="#education">Education</Nav.Link>
					      <Nav.Link href="#skills">Skills</Nav.Link>
					      <Nav.Link href="#projects">Projects</Nav.Link>
					    </Nav>
					  </Navbar.Collapse>
				  </div>
			</Navbar>	
			</div>		
			);
	};
}

export default Navigation;