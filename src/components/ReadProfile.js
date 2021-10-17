import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const ReadProfile = (profile) => {
    // const [profile, setProfile] = useState(profile);

    return (
        <Container className="profile-body">
            <Row>
                {HeaderCol('Name:')}
                <Col>{profile?.name}</Col>
            </Row>
            <Row>
                {HeaderCol('Avatar:')}
                <Col>{profile?.avatar}</Col>
            </Row>
            <Row>
                {HeaderCol('Color:')}
                <Col>{profile?.color}</Col>
            </Row>
            <Row>
                {HeaderCol('Info:')}
                <Col>{profile?.info}</Col>

            </Row>
        </Container>
    )
}

const HeaderCol = (body) => {
    return <Col style={{textAlign: "center"}} className="header-col">{body}</Col>
}

export default ReadProfile
