import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import JumbotronProfilePage from "../Components/JumbotronProfilePage";
import Bio from '../Components/Bio'

export default class ProfilePage extends Component {
  state = {
    userData: {}
  }

  getMyData = async () => {
    const andisToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMGM5YzZmZDIyODAwMTUzZmRiYWMiLCJpYXQiOjE2MTc2OTM4NTIsImV4cCI6MTYxODkwMzQ1Mn0.b_4i8l9HxOmAylxIxWyK1cX9Brjnydu_my16UsNd4PE'
    try {
      let resp = await fetch(
        'https://striveschool-api.herokuapp.com/api/profile/me', {
          headers: {
            'Authorization' : 'Bearer ' + andisToken
          }
        }
      );
      let loggedInUser = await resp.json()
      if (resp.ok) {
        this.setState({
          userData: loggedInUser
        })
      }

    } catch (err) {
      console.log(err)
      alert(`There's an error. Check your console.`)
    }
  }

  componentDidMount = () => {
    this.getMyData()
  }
  render() {
    console.log(this.state)
    return (
      <Container>
        <Row>
          <Col xs={8}>
            <JumbotronProfilePage thisUser={this.state.userData} />
            {/* <Highlights /> */}
            <Bio bioText={this.state.userData.bio}/>
          </Col>
          <Col xs={4}>
            {/* <AdvertisementBoxes />
            <MutualFriends />
            <Learning />*/}
          </Col>
        </Row>
      </Container>
    );
  }
}
