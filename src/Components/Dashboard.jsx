import React from "react";
import { Card, ListGroup } from "react-bootstrap";

function Dashboard() {
  return (
    <Card className="mt-3" style={{ backgroundColor: "#DCE6F1" }}>
      <Card.Body>
        <Card.Title>
          Your Dashboard <br />
          <i>
            <small style={{ color: "grey" }}>Private to you</small>
          </i>
        </Card.Title>
        <ListGroup horizontal style={{ height: "84px" }}>
          <ListGroup.Item style={{ width: "33.33%" }}>
            <h1
              style={{
                color: "#5292D4",
                fontSize: "32px",
                fontWeight: "200",
                marginBottom: "0",
              }}
            >
              2
            </h1>
            <p style={{ fontSize: "14px" }}>Who viewed your profile</p>
          </ListGroup.Item>
          <ListGroup.Item style={{ width: "33.33%" }}>
            <h1
              style={{
                color: "#5292D4",
                fontSize: "32px",
                fontWeight: "200",
                marginBottom: "0",
              }}
            >
              0
            </h1>
            <p style={{ fontSize: "14px" }}>Article views</p>
          </ListGroup.Item>
          <ListGroup.Item style={{ width: "33.33%" }}>
            <h1
              style={{
                color: "#5292D4",
                fontSize: "32px",
                fontWeight: "200",
                marginBottom: "0",
              }}
            >
              4
            </h1>
            <p style={{ fontSize: "14px" }}>Search appearances</p>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default Dashboard;
