import React, { useState } from "react"
import { Button, Form } from 'react-bootstrap'
import { updateProfile } from '../../flow/update-profile'

const ProfileForm = (profile, txContext) => {
    const [ profileName, setProfileName ] = useState('');
    const [ profileAvatar, setProfileAvatar ] = useState('');
    const [ profileColor, setProfileColor ] = useState('');
    const [ profileInfo, setProfileInfo ] = useState('');

    const submitForm = async (event) => {
        event.preventDefault(); // Incredibly important magic line that does something?

        const newProfile = {
            name : profileName ? profileName : profile.name,
            avatar : profileAvatar ? profileAvatar : profile.avatar,
            color : profileColor ? profileColor : profile.Color,
            info : profileInfo ? profileInfo: profile.Info,
        }

        // Blocto wallet thingy throws Errors liberally, gotta catch em all
        try {
            const txId = await updateProfile(profile, newProfile)
            txContext.createTx(txId)
        } catch (e) {
            console.log(e)
        }
    }

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

export default ProfileForm
