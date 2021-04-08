import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import NewsFeed from '../Components/NewsFeed'

class Homepage extends Component {
  state = {
    arrOfPost: [],
    selectedPost: {},
    showModal: false,
  };

  getPostData = async () => {
    const andisToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMGM5YzZmZDIyODAwMTUzZmRiYWMiLCJpYXQiOjE2MTc2OTM4NTIsImV4cCI6MTYxODkwMzQ1Mn0.b_4i8l9HxOmAylxIxWyK1cX9Brjnydu_my16UsNd4PE';

    try {
      let resp = await fetch(
        'https://striveschool-api.herokuapp.com/api/posts/',
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
          arrOfPost: postData
        });
      } else {
        alert('something wrong in the code')
      }
    } catch (err) {
      console.log(err);
      alert(`There's an error. Check your console.`);
    }
  };

  componentDidMount = () => {
    this.getPostData();
     // console.log(this.state.arrOfPost[1].user);
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
            {/* <PostInput /> */}
           { this.state.arrOfPost.length>0 &&<NewsFeed posts={this.state.arrOfPost}/>}
          </Col>
          <Col xs={3}>{/* <RSideBar /> */}</Col>
        </Row>
      </Container>
    );
  }
}

export default Homepage;