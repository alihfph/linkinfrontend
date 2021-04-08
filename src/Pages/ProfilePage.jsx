import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import JumbotronProfilePage from "../Components/JumbotronProfilePage";
import Bio from "../Components/Bio";
import MutualFriends from "../Components/MutualFriends";
import Advertisement from "../Components/Advertisement";
import Experiences from "../Components/Experiences";
import Modalexp from "../Components/Modalexp";
import EditUrl from "../Components/EditUrl";
import Dashboard from "../Components/Dashboard";

export default class ProfilePage extends Component {
  state = {
    userData: {},
    expData: [],
    modalShow: false,
    expToEdit: {},
  };

  setModalShow = async (bool, ExpID,) => {
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
        this.setState({ ...this.state, expToEdit: data, modalShow: bool });
      } catch (error) {
        console.log(error);
      }
    } else {
      this.setState({ modalShow: bool, expToEdit:{} });
    }
  };
  
  getMyData = async () => {
    const andisToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMGM5YzZmZDIyODAwMTUzZmRiYWMiLCJpYXQiOjE2MTc2OTM4NTIsImV4cCI6MTYxODkwMzQ1Mn0.b_4i8l9HxOmAylxIxWyK1cX9Brjnydu_my16UsNd4PE";

    try {
      let resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          headers: {
            Authorization: "Bearer " + andisToken,
          },
        }
      );
      let loggedInUser = await resp.json();
      if (resp.ok) {
        this.setState({
          userData: loggedInUser,
        });
      }
    } catch (err) {
      console.log(err);
      alert(`There's an error. Check your console.`);
    }
  };

  getMyExp = async (loggedInUser) => {
    const andisToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMGM5YzZmZDIyODAwMTUzZmRiYWMiLCJpYXQiOjE2MTc2OTM4NTIsImV4cCI6MTYxODkwMzQ1Mn0.b_4i8l9HxOmAylxIxWyK1cX9Brjnydu_my16UsNd4PE";
    try {
      let resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${loggedInUser._id}/experiences`,
        {
          headers: {
            Authorization: "Bearer " + andisToken,
          },
        }
      );
      let userExp = await resp.json();
      if (resp.ok) {
        this.setState({
          expData: userExp,
        });
      } else {
      }
    } catch (error) {
      console.log(error);
      alert(`There's an error. Check your console.`);
    }
  };

  componentDidMount = () => {
    this.getMyData().then(() => this.getMyExp(this.state.userData));
  };

  render() {
    return (
      <Container>
        <Modalexp
          expToEdit={this.state.expToEdit}
          userID={this.state.userData._id}
          show={this.state.modalShow}
          onHide={this.setModalShow}
          getMyExp={this.getMyExp}
        />
        <Row>
          <Col xs={8}>
            <JumbotronProfilePage thisUser={this.state.userData} />
            {/* <Highlights /> */}
            <Dashboard />
            <Bio bioText={this.state.userData.bio} />
            <Experiences
              setModalShow={this.setModalShow}
              userID={this.state.userData._id}
              expData={this.state.expData}
            />
          </Col>
          <Col xs={4}>
            <EditUrl />
            <Advertisement />
            <MutualFriends history={this.props.history} />
            {/* <Learning /> */}
          </Col>
        </Row>
      </Container>
    );
  }
}
