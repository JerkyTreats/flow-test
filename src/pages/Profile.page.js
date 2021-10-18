import React, { useState, useEffect } from 'react'
import ReadProfile from '../components/profile/ReadProfile'
import ProfileForm from '../components/profile/ProfileForm'
import { Container, Col, Row } from 'react-bootstrap'
import { fetchProfile } from '../flow/fetch-profile'
import { useAuth } from '../providers/AuthProvider';
import { useTxs } from '../providers/TxProvider';


const Profile = () => {
    const [ profile, setProfileState ] = useState({});
    const auth = useAuth()
    const txs = useTxs()

    useEffect(() =>  {
        const fetchProfileData = async () => {
            const address = auth.user?.addr
            if (address) {
                const res = await fetchProfile(address)
                setProfileState(res)
                return
            }
            setProfileState(null)
        }
        fetchProfileData()
    }, [auth.loggedIn, txs])

    return (
        <>
        <div className="header-default">
            <h2> Profile </h2>
        </div>

        <Container>
            <Row>
                <Col>
                    {ReadProfile(profile)}
                </Col>
                <Col xs={9}>
                    {ProfileForm(profile, txs)}
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Profile
