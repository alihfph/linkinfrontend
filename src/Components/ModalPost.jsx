import React, { Component } from "react";
import {
  Button,
  Modal,
  Form,
  Alert,
  Col,
  Row,
  Dropdown,
} from "react-bootstrap";

export default class ModalPost extends Component {
  state = {
    myNewpost: { text: "" },
  };

  handleInput = (e) => {
    this.setState({
      myNewpost: {
        ...this.state.text,
        text: e.target.value,
      },
    });
  };
  newPost = async (e) => {
    e.preventDefault();
    try {
      const andisToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMGM5YzZmZDIyODAwMTUzZmRiYWMiLCJpYXQiOjE2MTc2OTM4NTIsImV4cCI6MTYxODkwMzQ1Mn0.b_4i8l9HxOmAylxIxWyK1cX9Brjnydu_my16UsNd4PE";
      let resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/`,
        {
          method: "POST",
          body: JSON.stringify(this.state.myNewpost),
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + andisToken,
          },
        }
      );
      if (resp.ok) {
        alert("your post has been send");
        this.props.onHide(false);
      } else {
        alert("there was a problem with your Post");
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  render() {
    return (
      <Modal
        {...this.props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create Post "Need render conditional when edit"
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="align-content-start">
            <Col>
              <img
                style={{ height: "50px", width: "50px" }}
                className="rounded-circle"
                src="https://picsum.photos/200"
                alt="Userimage"
              />
            </Col>
            <Col className="ml-auto">
              <h4>User Name</h4>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Anyone
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Just you</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Anyone</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">No one</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <Form className="mx-3 mt-1" onSubmit={this.newPost}>
            <Form.Group>
              <Form.Control
                as="textarea"
                placeholder="What do you want to talk about?"
                rows={3}
                id="postDescription"
                onChange={this.handleInput}
                value={this.state.myNewpost.descriptionPost}
              />
            </Form.Group>
            <Modal.Footer>
              <Alert variant="secondary">
                Choose who can comment on your post
              </Alert>
              <Row>
                <Col xs={3}>icons</Col>
                <Col xs={6}>who can comment? with tooltip</Col>
                <Col xs={3}>
                  <Button variant="secondary" type="submit">
                    Post
                  </Button>
                </Col>
              </Row>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}
