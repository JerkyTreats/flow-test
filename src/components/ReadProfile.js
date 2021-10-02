import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { fetchProfile } from '../flow/fetch-profile'
import { useAuth } from '../providers/AuthProvider';

const ReadProfile = () => {
    const [profile, setProfile] = useState({});
    const auth = useAuth()

    useEffect(() =>  {
        const fetchProfileData = async () => {
            const address = auth.user?.addr
            if (address) {
                const res = await fetchProfile(address)
                console.log(res)
                setProfile(res)
            }
        }
        fetchProfileData()
    }, [auth])

    return (
        <Container className="w-25 profile-body">
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
    return <Col style={{textAlign: "right"}} className="header-col">{body}</Col>
}

export default ReadProfile
