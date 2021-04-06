import React from 'react';
import {Card} from 'react-bootstrap'

function Bio({bioText}) {
  return (
    <Card className='mt-3'>
      <Card.Body>
        <Card.Title>Info</Card.Title>
        <Card.Text>{bioText}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Bio;