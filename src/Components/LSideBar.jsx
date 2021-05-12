import React, { Component } from 'react'
import { Card, ListGroup } from "react-bootstrap";
import styles from "../styles/jumbotron_profile_page_style.module.css";
import LSidebarSecond from './LSidebarSecond'


export default class LSideBar extends Component {
  state = {
    userData: {},
  };


  // getMyData = async () => {
  //   const hafizToken =
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMTJjYjZmZDIyODAwMTUzZmRiYWQiLCJpYXQiOjE2MTc2OTU0MzUsImV4cCI6MTYxODkwNTAzNX0.nOP2K-GO7_8CEvXhifB4qpEjN9ABQQQq8lXiP596jWY";

  //   try {
  //     let resp = await fetch(
  //       "https://striveschool-api.herokuapp.com/api/profile/me",
  //       {
  //         headers: {
  //           Authorization: "Bearer " + hafizToken,
  //         },
  //       }
  //     );
  //     let loggedInUser = await resp.json();
  //     if (resp.ok) {
  //       this.setState({
  //         userData: loggedInUser,
  //       });
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     alert(`There's an error. Check your console.`);
  //   }
  // };


  // componentDidMount = () => {
  //   this.getMyData()
  // };

  render() {
    return (
      <>
        <Card>
          <Card.Img
            variant='top'
            src='https://picsum.photos/800/300'
            style={{
              borderTopLeftRadius: '15px',
              borderTopRightRadius: '15px',
            }}
          />
          <Card.Body>
            <div
              className='styles.imgWrapper ml-4'
              style={{ marginTop: '-60px' }}
            >
              <img
                className={styles.borderRound}
                src={this.props.user.image}
                alt='profile pic'
                style={({ width: '70px' }, { height: '70px' })}
              />
            </div>
            <Card.Title
              className='mt-2 text-center'
              style={{ fontSize: '15px' }}
            >
              {this.props.user.username} {this.props.user.surname}
              <div className='text-center muted' style={{ fontSize: '12px' }}>
                {this.props.user.title}
              </div>
            </Card.Title>

            <Card.Text
              className='text-center muted'
              style={{ fontSize: '12px' }}
            >
              {this.props.user.area}
            </Card.Text>

            <ListGroup variant='flush'>
              <ListGroup.Item
                className='muted ml-1 text-truncate'
                style={{ fontSize: '9px' }}
              >
                Who viewd your profile
              </ListGroup.Item>
              <ListGroup.Item
                className='muted ml-1'
                style={{ fontSize: '9px' }}
              >
                Connections
              </ListGroup.Item>
              <ListGroup.Item
                className='ml-1 text-bold'
                style={{ fontSize: '9px', fontWeight: 'bold' }}
              >
                Grow your Network
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>

        <LSidebarSecond />
      </>
    );
  }
}





