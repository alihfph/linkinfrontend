import React from "react";
import { Col, Row } from "react-bootstrap";

export default function ExpItem(props) {
  //console.log(props.exp);
  return (
    <div>
      <Row>
        <Col xs={3}>
          <img
            style={{ height: "50px", width: "50px" }}
            className="rounded"
            src={props.exp.image}
            alt="Logo employer"
          />
        </Col>
        <Col xs={9}>
          <strong>{props.exp.company}</strong> <br />
          {props.exp.role}
        </Col>
      </Row>
    </div>
  );
}
