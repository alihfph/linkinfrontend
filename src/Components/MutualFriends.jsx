import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import UserCard from './UserCard'

export default class MutualFriends extends Component {
    render() {
        return (
            <Col>
                <h2>People you may know</h2>
                <UserCard/>
            </Col>
        )
    }
}
