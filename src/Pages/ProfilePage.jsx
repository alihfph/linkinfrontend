import React, { Component } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import JumbotronProfilePage from "../Components/JumbotronProfilePage";
import Bio from "../Components/Bio";
import MutualFriends from "../Components/MutualFriends";
import Advertisement from "../Components/Advertisement";
import Experiences from "../Components/Experiences";
import Modalexp from "../Components/Modalexp";

export default class ProfilePage extends Component {
  state = {
    userData: {},
    expData: [],
    modalShow: false,
  };

  setModalShow = (bool) => {
    this.setState({ modalShow: bool });
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
  // postNewExp = async (userID) => {
  //   try {
  //     const andisToken =
  //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMGM5YzZmZDIyODAwMTUzZmRiYWMiLCJpYXQiOjE2MTc2OTM4NTIsImV4cCI6MTYxODkwMzQ1Mn0.b_4i8l9HxOmAylxIxWyK1cX9Brjnydu_my16UsNd4PE";
  //     let resp = await fetch(
  //       `https://striveschool-api.herokuapp.com/api/profile/${userID}/experiences`,
  //       {
  //         method: "POST",
  //         body: JSON.stringify(this.state.myNewExp),
  //         headers: {
  //           "Content-type": "application/json",
  //           Authorization: "Bearer " + andisToken,
  //         },
  //       }
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  componentDidMount = () => {
    this.getMyData().then(() => this.getMyExp(this.state.userData));
  };

  render() {
    console.log(this.state);
    return (
      <Container>
        <Modalexp
          userID={this.state.userData._id}
          show={this.state.modalShow}
          onHide={this.setModalShow}
        />
        <Row>
          <Col xs={8}>
            <JumbotronProfilePage thisUser={this.state.userData} />
            {/* <Highlights /> */}
            <Bio bioText={this.state.userData.bio} />
            <Experiences
              setModalShow={this.setModalShow}
              userID={this.state.userData._id}
              expData={this.state.expData}
            />
          </Col>
          <Col xs={4}>
            <Advertisement />
            <MutualFriends />
            {/* <AdvertisementBoxes />
            
            <Learning />*/}
          </Col>
        </Row>
      </Container>
    );
  }
}
