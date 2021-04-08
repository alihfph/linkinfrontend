import React, { Component } from 'react';
import {Card, } from 'react-bootstrap'
import {BsThreeDots} from 'react-icons/bs'

class NewsFeed extends Component {
  render() {
    console.log(this.props.posts)
    return (
      <>
        {this.props.posts.map((post, i) => (
          <Card key={post._id}>
            <Card.Body>
              <div className='d-flex d-flex justify-content-between m-0 p0'>
                <div className='m-0 p0'>
                  <Card.Title>{post.user.name}</Card.Title>
                  <Card.Subtitle className='mb-2 text-muted'>
                    {post.user.title}
                  </Card.Subtitle>
                </div>
                <div className='m-0 p0'>
                  <BsThreeDots />
                </div>
              </div>
              <Card.Text>{post.text}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </>
    );
  }
}

export default NewsFeed;