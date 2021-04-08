import React, { Component } from 'react';
import {Card, } from 'react-bootstrap'
import {BsThreeDots} from 'react-icons/bs'

class NewsFeed extends Component {
  render() {
   
    return (
      <>
        {this.props.posts.length>0 && this.props.posts.map((post) => post.user &&(
          <Card key={post._id}>
            {console.log(post.user)}
            <Card.Body>
              <div className='d-flex d-flex justify-content-between m-0 p0'>
                <div className='m-0 p0'>
                  <div className='m-0 p0'>
                  <Card.Title>{post.user.name}</Card.Title>
                  <Card.Subtitle className='mb-2 text-muted'>
                    {post.user.title ? post.user.title : 'no title'}
                  </Card.Subtitle>
                  </div>
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