import React, { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";
import UserCard from "./UserCard";

export default class MutualFriends extends Component {
  state = {
    mutualFriends: [],
  };

  getMutualFriends = async () => {
    try {
      let resp = await fetch(
        "/profile/",
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem("jwt"),
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
      <Card className="p-2" style={{ borderRadius: "9px" }}>
        <Card.Title style={{ fontSize: "16px" }} className="pt-1 pl-1">
          People you may know
        </Card.Title>
        <ListGroup>
          {this.state.mutualFriends.slice(0, 4).map((user) => (
            <ListGroup.Item className="border-0" key={user._id}>
              <UserCard history={this.props.history} user={user} />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    );
  }
}
