import React from "react";
import { Col, Row, Button } from "react-bootstrap";

export default function UserCard(props) {
  return (
    <Row>
      <Col xs={3}>
        <img
          style={{ height: "50px", width: "50px" }}
          className="rounded-circle"
          src={props.user.image}
          alt="friends-pic"
        />
      </Col>
      <Col xs={9}>
        <strong>{props.user.name}</strong> <br />
        {props.user.title}
        <div>
          <Button>Connect</Button>
        </div>
      </Col>
    </Row>
  );
}
