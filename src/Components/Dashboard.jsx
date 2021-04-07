import React from 'react';
import {Card, ListGroup} from 'react-bootstrap'

function Dashboard() {
  return (
    <Card className='mt-3'>
      <Card.Body>
        <Card.Title>
          Your Dashboard <br />
          <i>
            <small>Private to you</small>
          </i>
        </Card.Title>
        <ListGroup horizontal>
          <ListGroup.Item style={{ width: '33.33%' }}>
            <h1>2</h1>
            <p>Who viewed your profile</p>
          </ListGroup.Item>
          <ListGroup.Item style={{ width: '33.33%' }}>
            <h1>0</h1>
            <p>Article views</p>
          </ListGroup.Item>
          <ListGroup.Item style={{ width: '33.33%' }}>
            <h1>4</h1>
            <p>Search appearances</p>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default Dashboard;