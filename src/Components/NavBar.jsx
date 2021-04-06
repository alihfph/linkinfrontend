import React, { Component } from 'react'
import {FaLinkedin} from 'react-icons/fa';
import { ImHome, ImDice, ImLibrary, ImPhone, ImClock2, ImDatabase, ImRocket } from "react-icons/im";
import { Nav, Navbar, Form, FormControl, Container} from 'react-bootstrap';

export default class NavBar extends Component {
  render() {
    return (
      <Container fluid>
      
        <Navbar  expand="lg">
        <Form inline>
          <Navbar.Brand href="#home"><FaLinkedin style={{color:"	rgb(65,105,225)", fontSize:"40px"}}/></Navbar.Brand>
          <FormControl type="text" placeholder="Search" className="" />
          </Form>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto my-auto text-center">
          </Nav>
           <Nav className="text-center mx-4" style={{display:"block"}}><div><ImHome/></div> <div> Home </div></Nav>
           <Nav className="text-center mx-4" style={{display:"block"}}><div><ImDice/></div> <div> Home </div></Nav>
           <Nav className="text-center mx-4" style={{display:"block"}}><div><ImLibrary/></div> <div> Home </div></Nav>
           <Nav className="text-center mx-4" style={{display:"block"}}><div><ImPhone/></div> <div> Home </div></Nav>
           <Nav className="text-center mx-4" style={{display:"block"}}><div><ImClock2/></div> <div> Home </div></Nav>
           <Nav className="text-center mx-4" style={{display:"block"}}><div><ImDatabase/></div> <div> Home </div></Nav>
           <Nav className="text-center mx-4" style={{display:"block"}}><div><ImRocket/></div> <div> Home </div></Nav>
           </Navbar.Collapse>
          </Navbar>
      </Container>
    )
  }
}
