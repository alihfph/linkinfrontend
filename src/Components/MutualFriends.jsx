import React, { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";
import UserCard from "./UserCard";

export default class MutualFriends extends Component {
  state = {
    mutualFriends: [],
  };

  getMutualFriends = async () => {
    const davidToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjNGIzNTZmZDIyODAwMTUzZmRiY2UiLCJpYXQiOjE2MTc3MDk4NzgsImV4cCI6MTYxODkxOTQ3OH0.Oj8Gh3QwA30cjIFBe8hsuCJpduzXOjcNHFbI6hV3IvM";
    try {
      let resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          headers: {
            Authorization: "Bearer " + davidToken,
          },
        }
      );
      let mutualFriendsResp = await resp.json();
      if (resp.ok) {
        this.setState({
          mutualFriends: mutualFriendsResp,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  componentDidMount = () => {
    this.getMutualFriends();
  };

  render() {
    console.log(this.state.mutualFriends);
    return (
      <Card className='p-2'>
        <Card.Title>People you may know</Card.Title>
        <ListGroup>
          {this.state.mutualFriends.slice(0, 4).map((user) => (
            <ListGroup.Item key={user._id}>
              <UserCard user={user} />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    );
  }
}
