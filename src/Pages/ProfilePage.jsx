import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import JumbotronProfilePage from "../Components/JumbotronProfilePage";

export default class ProfilePage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={8}>
            <JumbotronProfilePage />
            {/* <Highlights />
            <Bio /> */}
          </Col>
          <Col xs={4}>
            {/* <AdvertisementBoxes />
            <MutualFriends />
            <Learning /> */}
          </Col>
        </Row>
      </Container>
    );
  }
}
