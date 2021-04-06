import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function UserCard() {
    return (
        <Row>
           <Col xs={3}>
           <img className="rounded-circle" src="https://via.placeholder.com/45" alt="friends-pic"/>
           </Col> 
           <Col xs={9}>
           <h3><strong>Friend Name</strong></h3>
           <p>User title, profession</p>
           </Col> 
        </Row>
    )
}
