import React from "react";
import { Button, Card } from "react-bootstrap";
import styles from "../styles/jumbotron_profile_page_style.module.css";

export default function Hero({ thisUser }) {
  return (
    <Card
      style={{
        borderTopLeftRadius: '15px',
        borderTopRightRadius: '15px',
        borderBottomLeftRadius: '15px',
        borderBottomRightRadius: '15px',
        width: '100%'
      }}
    >
      <Card.Img
        variant='top'
        src='https://picsum.photos/800/300'
        style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
      />
      <Card.Body>
        <div className={styles.imgWrapper}>
          <img
            className={styles.borderRound}
            src={thisUser.image}
            alt='profile pic'
            style={({ width: '180px' }, { height: '180px' })}
          />
        </div>
        <Card.Title className='mt-2'>
          {thisUser.name} {thisUser.surname}
        </Card.Title>
        <h6>{thisUser.title}</h6>
        <Card.Text>{thisUser.area}</Card.Text>
        <Button className='rounded-pill' variant='primary'>
          Open for...
        </Button>
        <Button className='mx-2 rounded-pill' variant='outline-secondary'>
          Edit Profile
        </Button>
        <Button className='rounded-pill' variant='outline-secondary'>
          More...
        </Button>
      </Card.Body>
    </Card>
  );
}
