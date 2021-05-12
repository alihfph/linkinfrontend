import React, { Component } from 'react';
import {Card, Dropdown} from 'react-bootstrap'

class NewsFeed extends Component {
  state = {
    userData: {}
  }
  
  deletePost = async (postId) => {

    try {
      let resp = await fetch(
        `/posts/${postId}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem("jwt"),
          },
        }
      );
      if (resp.ok) {
        alert(`Post deleted`);
      } else {
        alert(`Action unauthorized!`);
      }
    } catch (error) {
      console.log(error);
      alert(`There's an error. Check your console.`);
    }
  };


  render() {
    return (
      <>
        {this.props.posts.length > 0 &&
          this.props.posts.slice(400, this.props.posts.length).map(
            (post) =>
              post.user && (
                <Card key={post._id} className='mb-3'>
                  <Card.Body>
                    <div className='d-flex d-flex justify-content-between m-0 p0'>
                      <div className='m-0 p0'>
                        <div className='m-0 p0'>
                          <Card.Title>{post.user.username}</Card.Title>
                          <Card.Subtitle className='mb-2 text-muted'>
                            {post.user.title}
                          </Card.Subtitle>
                        </div>
                      </div>
                      <div className='m-0 p0'>
                        <Dropdown>
                          <Dropdown.Toggle variant='link'></Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item onClick={() =>
                              this.props.setModalShow(true, post._id)                              
                            }>
                              Edit this post
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => {
                                this.deletePost(post._id);
                                this.props.handleRef();
                              }}
                            >
                              Delete this post
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                    <Card.Text>{post.text}</Card.Text>
                  </Card.Body>
                </Card>
              )
          )}
      </>
    );
  }
}

export default NewsFeed;