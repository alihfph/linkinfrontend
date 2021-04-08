import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import RightBar from "../Components/RightBar";

class Homepage extends Component {
  state = {
    arrOfPost: [],
    selectedPost: {},
    showModal: false,
  };

  getPostData = async () => {
    const andisToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMGM5YzZmZDIyODAwMTUzZmRiYWMiLCJpYXQiOjE2MTc2OTM4NTIsImV4cCI6MTYxODkwMzQ1Mn0.b_4i8l9HxOmAylxIxWyK1cX9Brjnydu_my16UsNd4PE";

    try {
      let resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          headers: {
            Authorization: "Bearer " + andisToken,
          },
        }
      );
      let postData = await resp.json();
      if (resp.ok) {
        this.setState({
          ...this.state,
          arrOfPost: postData,
        });
      }
    } catch (err) {
      console.log(err);
      alert(`There's an error. Check your console.`);
    }
  };

  setModalShow = async (bool, ExpID) => {
    if (bool && ExpID) {
      try {
        const andisToken =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMGM5YzZmZDIyODAwMTUzZmRiYWMiLCJpYXQiOjE2MTc2OTM4NTIsImV4cCI6MTYxODkwMzQ1Mn0.b_4i8l9HxOmAylxIxWyK1cX9Brjnydu_my16UsNd4PE";
        let resp = await fetch(
          `https://striveschool-api.herokuapp.com/api/profile/${this.state.userData._id}/experiences/${ExpID}`,
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + andisToken,
            },
          }
        );
        let data = await resp.json();
        this.setState({ ...this.state, expToEdit: data });
      } catch (error) {
        console.log(error);
      }
    } else {
      this.setState({ modalShow: bool });
    }
  };

  componentDidMount = () => {
    this.getPostData();
  };

  render() {
    return (
      <Container>
        {/* <ModalPost
              showModal={this.state.showModal}
              show={this.state.modalShow}
              onHide={this.setModalShow}/> */}
        <Row>
          <Col xs={2}>{/* <LSideBar />*/}</Col>
          <Col xs={7}>
            {/* <PostInput />
                <NewsFeed {arrOfPost}/> */}
          </Col>
          <Col xs={3}>
            <RightBar />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Homepage;
