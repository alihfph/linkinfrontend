import React, { Component } from 'react';
import {Card, ListGroup,} from 'react-bootstrap'
import ExpItem from './ExpItem'

class Experiences extends Component {
  render() {
    console.log(this.props.expData);
    return (
      <Card className='p-2'>
        <Card.Title>Experiences</Card.Title>
        <ListGroup>
          {this.props.expData.map((exp) => (
            <ListGroup.Item className='border-0' key={exp._id}>
              <ExpItem exp={exp}/>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    );
  }
}

export default Experiences;