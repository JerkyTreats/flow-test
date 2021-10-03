import React from 'react'
import ReadProfile from '../components/ReadProfile'
import { Button, Container, Col, Row } from 'react-bootstrap'
import { updateProfile } from '../flow/update-profile'

const Profile = () => {
    return (
        <>
        <div className="header-default">
            <h2> Profile </h2>
        </div>

        <Container>
            <Row>
                <Col>
                   {ReadProfile()}
                </Col>
                <Col xs={9}>
                    <h2> Set Profile</h2>
                    <Button onClick={() => updateProfile()}>Update Name</Button>
                    <Button>Update Avatar</Button>
                    <Button>Update Color</Button>
                    <Button>Update Info</Button>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Profile
