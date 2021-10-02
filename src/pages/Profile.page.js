import React from 'react'
import ReadProfile from '../components/ReadProfile'

const Profile = () => {
    return (
        <>
        <div className="header-default">
            <h2> Profile </h2>
        </div>

        {ReadProfile()}
        </>
    )
}

export default Profile
