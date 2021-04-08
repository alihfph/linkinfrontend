import React, { Component } from 'react'
import { Card, ListGroup } from "react-bootstrap";

export default class LSidebarSecond extends Component {
  render() {
    return (
      <>
       
      <Card
      style={{
        borderTopLeftRadius: "15px",
        borderTopRightRadius: "15px",
        borderBottomLeftRadius: "15px",
        borderBottomRightRadius: "15px",
      }}
      > 
     
      
    
      
  <Card.Body>
   <Card.Title style={{fontSize:"9px", fontWeight: "bold"}} >Recent</Card.Title>    
    <ListGroup variant="flush">
    <ListGroup.Item className="muted ml-1 text-truncate" style={{fontSize:"9px"}}></ListGroup.Item>
    <ListGroup.Item className="muted ml-1 text-truncate" style={{fontSize:"9px"}}>Jobs in NGOs, International Development Jobs, Non Government Vacancies, Not for Profit Jobs </ListGroup.Item>
    <ListGroup.Item className="muted ml-1 ext-truncate" style={{fontSize:"9px"}}>Nonprofit Network - International</ListGroup.Item>
    <ListGroup.Item className="muted ml-1 ext-truncate" style={{fontSize:"9px"}}>U.S. Agency for International Development</ListGroup.Item>
    <ListGroup.Item className="muted ml-1 ext-truncate" style={{fontSize:"9px"}}>Connections</ListGroup.Item>
    <Card.Title style={{fontSize:"9px", fontWeight: "bold", color:"blue"}} >Groups</Card.Title>
    <ListGroup.Item className="muted ml-1 ext-truncate" style={{fontSize:"9px"}}>Funding For NGOs</ListGroup.Item>
    <ListGroup.Item className="muted ml-1 ext-truncate" style={{fontSize:"9px"}}>Nonprofit Network - International</ListGroup.Item>    
    <ListGroup variant="flush"></ListGroup>
    <Card.Title style={{fontSize:"9px", fontWeight: "bold", color:"blue"}} >Followed HashTag</Card.Title>
  
              
</ListGroup>
  
      </Card.Body>
      
    </Card>
    
        
      </>
    )
  }
}
