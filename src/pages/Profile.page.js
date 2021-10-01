import React from 'react'
import { Container } from 'react-bootstrap'
import ReadProfile from '../components/ReadProfile'

const Profile = () => {
    ReadProfile()
    return (
        <>
        <div className="header-default">
            <h2> Profile </h2>
        </div>

        <Container>
            {ReadProfile()}
        </Container>
        </>
    )
}

export default Profile
