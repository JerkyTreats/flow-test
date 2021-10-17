import React from 'react'
import { useState, useEffect } from 'react'
import ReadProfile from '../components/ReadProfile'
import { Button, Container, Col, Row, Form } from 'react-bootstrap'
import { updateProfile } from '../flow/update-profile'
import * as fcl from "@onflow/fcl"
import { fetchProfile } from '../flow/fetch-profile'
import { useAuth } from '../providers/AuthProvider';

const test = () => {

}

const ProfileForm = (profile) => {
    const [ profileName, setProfileName ] = useState('');
    const [ profileAvatar, setProfileAvatar ] = useState('');
    const [ profileColor, setProfileColor ] = useState('');
    const [ profileInfo, setProfileInfo ] = useState('');


    const submitForm = async (event) => {
        event.preventDefault();

        const newProfile = {
            name : profileName ? profileName : profile.name,
            avatar : profileAvatar ? profileAvatar : profile.avatar,
            color : profileColor ? profileColor : profile.Color,
            info : profileInfo ? profileInfo: profile.Info,
        }
        console.log(newProfile)

        try {
            const txId = await updateProfile(profile, newProfile)
            console.log(txId)
            const thing = await fcl.tx(txId).subscribe(res => {
                if (res.errorMessage) {
                    console.log(res.errorMessage);
                }

                // What to do when the transaction is complete
                if (res.statusCode === 3) {

                    // setTransactionStatus();
                }
                console.log(res.status)
                console.log(res.errorMessage)
                console.log(res.statusCode)
                console.log(res.events)
            });
        } catch (e) {
            console.log(e)
        }
    }

        // fcl.tx(txId).subscribe(res => setTransactionStatus(res.status))

    return (
        <Form onSubmit={e => submitForm(e)}>
            <Form.Group className="mb-3" controlId="Name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    // type="name"
                    placeholder="Enter new Profile Name"
                    value={profileName}
                    onChange={e => setProfileName(e.target.value) }
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Avatar">
                <Form.Label>Avatar</Form.Label>
                <Form.Control
                    // type="avatar"
                    placeholder="Set new Avatar"
                    value={profileAvatar}
                    onChange={e => setProfileAvatar(e.target.value) }
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Color">
                <Form.Label>Color</Form.Label>
                <Form.Control
                    // type="color"
                    placeholder="Set new Color"
                    value={profileColor}
                    onChange = {e => setProfileColor(e.target.value) }
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Info">
                <Form.Label>Info</Form.Label>
                <Form.Control
                    // type="info"
                    placeholder="Set new Info"
                    value={profileInfo}
                    onChange = { e => setProfileInfo(e.target.value) }
                />
            </Form.Group>

            <Button
                variant="primary"
                type="submit"
                onClick={e => submitForm(e)}
            >
                Submit
            </Button>
        </Form>
    )
}



const Profile = () => {
    const [ transactionStatus, setTransactionStatus ] = useState(null)
    const [ profile, setProfileState ] = useState({});
    const auth = useAuth()

    useEffect(() =>  {
        const fetchProfileData = async () => {
            const address = auth.user?.addr
            if (address) {
                const res = await fetchProfile(address)
                console.log(res)
                setProfileState(res)
            }
        }
        fetchProfileData()
    }, [auth, transactionStatus])

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
                    {ProfileForm(profile)}
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Profile
