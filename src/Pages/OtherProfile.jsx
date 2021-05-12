import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import JumbotronProfilePage from '../Components/JumbotronProfilePage';
import Bio from '../Components/Bio';
import MutualFriends from '../Components/MutualFriends';
import Advertisement from '../Components/Advertisement';
import Experiences from '../Components/Experiences';
import Modalexp from '../Components/Modalexp';

export default class OtherProfile extends Component {
  state = {
    userData: {},
    expData: [],
    modalShow: false,
  };

  setModalShow = (bool) => {
    this.setState({ modalShow: bool });
  };
  getMyData = async () => {
    try {
      let resp = await fetch(
        'http://localhost:3001/profile/' +
          this.props.match.params.userId,
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem("jwt"),
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

  getMyExp = async () => {
    try {
      let resp = await fetch(
        `profile/${this.props.match.params.userId}/experiences`,
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem("jwt"),
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

  componentDidUpdate = (prevProps) => {
    if (prevProps !== this.props) {
      this.getMyData();
      this.getMyExp();
    }
  }

  render() {
    console.log(this.props.match.params.userId);
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
            <MutualFriends history={this.props.history}/>
            {/* <AdvertisementBoxes />
            
            <Learning />*/}
          </Col>
        </Row>
      </Container>
    );
  }
}
