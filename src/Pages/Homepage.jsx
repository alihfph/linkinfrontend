import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import ModalPost from "../Components/ModalPost";
import RightBar from "../Components/RightBar";
import NewsFeed from "../Components/NewsFeed";
import StartPost from "../Components/StartPost";
import LSideBar from "../Components/LSideBar";
class Homepage extends Component {
  state = {
    arrOfPost: [],
    userData: {},
    postToEdit: {},
    modalShow: false,
  };

  getPostData = async () => {
    try {
      let resp = await fetch("/posts", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      });
      let postData = await resp.json();
      console.log(postData);
      if (resp.ok) {
        //console.log(postData)
        this.setState({
          ...this.state,
          arrOfPost: postData,
        });
      } else {
        alert("something wrong in the code");
      }
    } catch (err) {
      console.log(err);
      alert(`There's an error. Check your console.`);
    }
  };

  getMyData = async () => {
    try {
      let resp = await fetch("/profile/me", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      });
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

  // componentDidMount = () => {
  //   this.getMyData();
  // };

  setModalShow = async (bool, postId) => {
    if (bool && postId) {
      try {
        let resp = await fetch(`/posts/${postId}`, {
          method: "GET",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("jwt"),
          },
        });
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
        <ModalPost
          postToEdit={this.state.postToEdit}
          show={this.state.modalShow}
          onHide={this.setModalShow}
        />
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
