import React from "react";
import { Col, Row, Button } from "react-bootstrap";

export default function ExpItem(props) {
  const deleteExp = async (userID) => {
    const andisToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMGM5YzZmZDIyODAwMTUzZmRiYWMiLCJpYXQiOjE2MTc2OTM4NTIsImV4cCI6MTYxODkwMzQ1Mn0.b_4i8l9HxOmAylxIxWyK1cX9Brjnydu_my16UsNd4PE";
    try {
      let resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userID}/experiences/${props.exp._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: "Bearer " + andisToken,
          },
        }
      );
      if (resp.ok) {
        alert(`Experience Delete`);
      } else {
      }
    } catch (error) {
      console.log(error);
      alert(`There's an error. Check your console.`);
    }
  };
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
        <Col xs={7}>
          <strong>{props.exp.company}</strong> <br />
          {props.exp.role}
        </Col>
        <Col xs={2}>
          <Button onClick={() => deleteExp(props.userID)} variant="danger">
            Delete
          </Button>
          <Button
            onClick={() => props.setModalShow(true, props.exp._id)}
            variant="success"
          >
            Edit
          </Button>
        </Col>
      </Row>
    </div>
  );
}
