import React from "react";
import { Col, Row, Button } from "react-bootstrap";

export default function UserCard(props) {
  return (
    <Row onClick={() => props.history.push('/profile/' + props.user._id)}>
      <Col xs={3}>
        <img
          style={{ height: "48px", width: "48px" }}
          className="rounded-circle"
          src={props.user.image}
          alt="friends-pic"
        />
      </Col>
      <Col xs={9}>
        <strong >{props.user.username}</strong>
        <br />
        <p style={{ fontSize: "12px" }}>{props.user.title}</p>
        <div>
          <Button
            style={{
              borderRadius: "30px",
              backgroundColor: "white",
              color: "grey",
              border: "2px solid grey",
              fontWeight: "600",
              height: "38px",
            }}>
            Connect
          </Button>
        </div>
      </Col>
    </Row>
  );
}
