import React, { Component } from 'react'
import {FaLinkedin, FaNetworkWired} from 'react-icons/fa';
import { Nav, Navbar, Form, FormControl} from 'react-bootstrap';

export default class NavBar extends Component {
  render() {
    return (
      <div>
      
        <Navbar  expand="lg">
        <Form inline>
          <Navbar.Brand href="#home"><FaLinkedin/></Navbar.Brand>
          <FormControl type="text" placeholder="Search" className="" />
          </Form>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto my-auto text-center">
          </Nav>
           <Nav className="text-center"><p><FaLinkedin/></p> <p> Home </p></Nav>
           <Nav href="#Network"><FaNetworkWired/> <br/>My Network</Nav>
           <Nav href="#Jobs"><FaNetworkWired/><br/> Jobs</Nav>
           <Nav href="#Messaging"><FaLinkedin/> <br/> Messaging</Nav>
           <Nav href="#Notification"><FaLinkedin/><br/> Notification</Nav>
           <Nav href="#Me"><FaLinkedin/><br/> Me</Nav>
           <Nav href="#Work"><FaLinkedin/><br/> Work</Nav>  
           </Navbar.Collapse>
          </Navbar>
      </div>
    )
  }
}
