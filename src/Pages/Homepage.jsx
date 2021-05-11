import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import ModalPost from "../Components/ModalPost";
import RightBar from "../Components/RightBar";
import NewsFeed from '../Components/NewsFeed'
import StartPost from "../Components/StartPost";
import LSideBar from '../Components/LSideBar'
class Homepage extends Component {
  state = {
    arrOfPost: [],
    userData: {},
    postToEdit: {},
    modalShow: false,
  };

  getPostData = async () => {
    const andisToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDlhNTdlMjA2NTQ1NTIzMzA5ZWRjOGYiLCJpYXQiOjE2MjA3NDQzNzB9.M7l5I2KNC6MFbKkjvlEMlqRG-crngaQG-rHadwQX1Ng';

    try {
      let resp = await fetch(
        'http://localhost:3001/posts',
        {
          headers: {
            Authorization: 'Bearer ' + andisToken,
          },
        }
      );
      let postData = await resp.json();
      if (resp.ok) {
        //console.log(postData)
        this.setState({
          ...this.state,
          arrOfPost: postData,
        });
      } else {
        alert('something wrong in the code');
      }
    } catch (err) {
      console.log(err);
      alert(`There's an error. Check your console.`);
    }
  };

  getMyData = async () => {
    const andisToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDlhNTdlMjA2NTQ1NTIzMzA5ZWRjOGYiLCJpYXQiOjE2MjA3NDQzNzB9.M7l5I2KNC6MFbKkjvlEMlqRG-crngaQG-rHadwQX1Ng';

    try {
      let resp = await fetch(
        'http://localhost:3001/profile/me',
        {
          headers: {
            Authorization: 'Bearer ' + andisToken,
          },
        }
      );
      let loggedInUser = await resp.json();
      if (resp.ok) {
        this.setState({
          ...this.state,
          userData: loggedInUser,
        });
      }
    } catch (err) {
      console.log(err);
      alert(`There's an error. Check your console.`);
    }
  };

  componentDidMount = () => {
    this.getMyData();
  };

  setModalShow = async (bool, postId) => {
    if (bool && postId) {
      try {
        const andisToken =
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDlhNTdlMjA2NTQ1NTIzMzA5ZWRjOGYiLCJpYXQiOjE2MjA3NDQzNzB9.M7l5I2KNC6MFbKkjvlEMlqRG-crngaQG-rHadwQX1Ng';
        let resp = await fetch(
          `http://localhost:3001/posts/${postId}`,
          {
            method: 'GET',
            headers: {
              Authorization: 'Bearer ' + andisToken,
            },
          }
        );
        let data = await resp.json();
        this.setState({ ...this.state, postToEdit: data, modalShow: bool });
      } catch (error) {
        console.log(error);
      }
    } else {
      this.setState({ modalShow: bool, postToEdit: {} });
    }
  };

  componentDidMount = () => {
    this.getPostData();
    this.getMyData();
  };

  render() {
    return (
      <Container>
        <ModalPost postToEdit={this.state.postToEdit} show={this.state.modalShow} onHide={this.setModalShow} />
        <Row>
          <Col xs={2}>
            <LSideBar user={this.state.userData} />
          </Col>
          <Col xs={7}>
            <StartPost
              history={this.props.history}
              user={this.state.userData}
              setModalShow={this.setModalShow}
            />
            {/* <PostInput />*/}
            <NewsFeed
              posts={this.state.arrOfPost}
              setModalShow={this.setModalShow}
              handleRef={() => this.handleRef()}
            />
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
