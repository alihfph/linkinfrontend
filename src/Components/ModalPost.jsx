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
    isEditing: false,
    myNewPost: { text: '' },
  };

  handleInput = (e) => {
    this.setState({
      myNewPost: {
        ...this.state.text,
        text: e.target.value,
      },
    });
  };

  handleEditing = () => {
    //console.log(this.props.postToEdit);
    if (this.props.postToEdit && this.props.show) {
      this.setState({
        isEditing: true,
        myNewPost: {
          text: this.props.postToEdit.text,
        },
      });
    } else {
      this.setState({
        isEditing: false,
        myNewPost: {
          text: '',
        },
      });
    }
  };

  

  newPost = async (e) => {
    e.preventDefault();
    try {
      const andisToken =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMGM5YzZmZDIyODAwMTUzZmRiYWMiLCJpYXQiOjE2MTc2OTM4NTIsImV4cCI6MTYxODkwMzQ1Mn0.b_4i8l9HxOmAylxIxWyK1cX9Brjnydu_my16UsNd4PE';
      let resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/`,
        {
          method: 'POST',
          body: JSON.stringify(this.state.myNewPost),
          headers: {
            'Content-type': 'application/json',
            Authorization: 'Bearer ' + andisToken,
          },
        }
      );
      if (resp.ok) {
        alert('your post has been send');
        this.props.onHide(false);
      } else {
        alert('there was a problem with your Post');
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  componentDidMount = () => {
    this.handleEditing();
  };

  componentDidUpdate = (prevProps) => {
    // console.log('THIS IS prevProps: ', prevProps);
    // console.log('THIS IS this.props: ', this.props);
    if (prevProps.postToEdit !== this.props.postToEdit) {
      //console.log('!!!!!', this.props.expToEdit);
      this.setState({
        myNewPost: {
          _id: this.props.postToEdit._id,
          text: this.props.postToEdit.text
        },
      });
    }
  };

  //   putExp= async (e) => {
  //   e.preventDefault();
  //   try {
  //     const andisToken =
  //       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMGM5YzZmZDIyODAwMTUzZmRiYWMiLCJpYXQiOjE2MTc2OTM4NTIsImV4cCI6MTYxODkwMzQ1Mn0.b_4i8l9HxOmAylxIxWyK1cX9Brjnydu_my16UsNd4PE';
  //     let resp = await fetch(
  //       `https://striveschool-api.herokuapp.com/api/profile/${this.props.userID}/experiences/${this.props.expToEdit._id}`,
  //       {
  //         method: 'PUT',
  //         body: JSON.stringify(this.state.myNewExp),
  //         headers: {
  //           'Content-type': 'application/json',
  //           Authorization: 'Bearer ' + andisToken,
  //         },
  //       }
  //     );
  //     if (resp.ok) {
  //       alert('your exp has been saved');
  //       this.props.onHide(false);
  //       this.props.getMyExp();
  //     } else {
  //       alert('there was a problem');
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     alert(error);
  //   }
  // }

  render() {
    return (
      <Modal
        {...this.props}
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header>
          <Modal.Title id='contained-modal-title-vcenter'>
            Create a post
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className='align-content-start'>
            <Col className='col-1'>
              <img
                style={{ height: '50px', width: '50px' }}
                className='rounded-circle'
                src='https://picsum.photos/200'
                alt='Userimage'
              />
            </Col>
            <Col className='ml-4'>
              <h4 style={{ fontSize: '16px' }}>User Name</h4>
              <Dropdown>
                <Dropdown.Toggle
                  variant='success'
                  id='dropdown-basic'
                  style={{
                    border: '1px solid grey',
                    backgroundColor: 'transparent',
                    color: 'grey',
                    height: '35px',
                    borderRadius: ' 25px',
                  }}
                >
                  Anyone
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href='#/action-1'>Just you</Dropdown.Item>
                  <Dropdown.Item href='#/action-2'>Anyone</Dropdown.Item>
                  <Dropdown.Item href='#/action-3'>No one</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <Form className='mx-3 mt-2' onSubmit={() => {this.newPost() }}>
            <Form.Group>
              <Form.Control
                style={{ border: 'none' }}
                as='textarea'
                placeholder='What do you want to talk about?'
                rows={3}
                id='postDescription'
                onChange={this.handleInput}
                value={this.state.myNewPost.text}
              />
            </Form.Group>
            <Modal.Footer>
              <Alert variant='secondary'>
                Choose who can comment on your post
              </Alert>
              <Row>
                <Col xs={3} className='d-flex justify-content-around'>
                  <div className='pl-1'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      data-supported-dps='24x24'
                      fill='grey'
                      class='mercado-match'
                      width='24'
                      height='24'
                      focusable='false'
                    >
                      <path d='M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z'></path>
                    </svg>
                  </div>
                  <div className='pl-1'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      data-supported-dps='24x24'
                      fill='grey'
                      class='mercado-match'
                      width='24'
                      height='24'
                      focusable='false'
                    >
                      <path d='M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z'></path>
                    </svg>
                  </div>
                  <div className='pl-1'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      data-supported-dps='24x24'
                      fill='grey'
                      class='mercado-match'
                      width='24'
                      height='24'
                      focusable='false'
                    >
                      <path d='M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z'></path>
                    </svg>
                  </div>
                </Col>
                <Col xs={6}>who can comment? </Col>
                <Col xs={3}>
                  <Button
                    variant='primary'
                    type='submit'
                    style={{ borderRadius: '15px', padding: '3px 18px' }}
                  >
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
