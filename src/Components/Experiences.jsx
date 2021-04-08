import React, { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";
import ExpItem from "./ExpItem";

class Experiences extends Component {
  render() {
    return (
      <Card className='p-2 mt-3'>
        <Card.Title>
          Experiences
          <span
            style={{ float: 'right', cursor: 'pointer' }}
            className='mr-2'
            onClick={() => {
              this.props.setModalShow(true);
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              data-supported-dps='24x24'
              fill='currentColor'
              class='mercado-match'
              width='24'
              height='24'
              focusable='false'
            >
              <path d='M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z'></path>
            </svg>
          </span>
        </Card.Title>
        <ListGroup>
          {this.props.expData.map((exp) => (
            <ListGroup.Item className='border-0' key={exp._id}>
              <ExpItem
                setModalShow={this.props.setModalShow}
                userID={this.props.userID}
                exp={exp}
                getMyExp={this.props.getMyExp}
              />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    );
  }
}

export default Experiences;
