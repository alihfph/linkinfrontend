import React, { Component } from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import ExpItem from "./ExpItem";

class Experiences extends Component {
  // state = {

  //   myNewExp: {
  //     role: "",
  //     company: "",
  //     startDate: "",
  //     endDate: null, //could be null
  //     description: "",
  //     area: "",
  //     image: "https://picsum.photos/200",
  //   },
  // };
  // postNewExp = async () => {
  //   try {
  //     const andisToken =
  //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMGM5YzZmZDIyODAwMTUzZmRiYWMiLCJpYXQiOjE2MTc2OTM4NTIsImV4cCI6MTYxODkwMzQ1Mn0.b_4i8l9HxOmAylxIxWyK1cX9Brjnydu_my16UsNd4PE";
  //     let resp = await fetch(
  //       `https://striveschool-api.herokuapp.com/api/profile/${this.props.userID}/experiences`,
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
  // componentDidMount = () => {
  //   this.postNewExp();
  // };
  render() {
    return (
      <Card className="p-2 mt-3">
        <Card.Title>
          Experiences{" "}
          <span
            style={{ float: "right", cursor: "pointer" }}
            className="mr-2"
            onClick={() => {
              this.props.setModalShow(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
            </svg>
          </span>
        </Card.Title>
        <ListGroup>
          {this.props.expData.map((exp) => (
            <ListGroup.Item className="border-0" key={exp._id}>
              <ExpItem exp={exp} />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    );
  }
}

export default Experiences;
