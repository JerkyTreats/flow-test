import React, {useState, useEffect} from "react"
import * as fcl from "@onflow/fcl"
import styled from "styled-components";


export function AuthCluster() {
    const [user, setUser ] = useState({loggedIn: null})
    useEffect(() => fcl.currentUser().subscribe(setUser), [])

    if (user.loggedIn) {
        return (
            <AuthBox>
                <AddressInfo> {user?.addr ?? "No Address"} </AddressInfo>
                <LoginButton onClick={fcl.unauthenticate}>Log Out</LoginButton>
            </AuthBox>
        )
    } else {
        return (
            <AuthBox>
                <LoginButton onClick={fcl.logIn}>Log In</LoginButton>
                <LoginButton onClick={fcl.signUp}>Sign Up</LoginButton>
            </AuthBox>
        )
    }
}

const AuthBox = styled.div`
    display: flex;
    /* align-items: center; */
    background-color: darkslateblue;
    padding-right: 2.5%;
    padding-left: 2.5%;
    padding-top: 2.5%;
    padding-bottom: 2.5%;
    margin: 0 -5%;
`

const AddressInfo = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size:32;
    color: lightgrey;
`

const LoginButton = styled.button`
    /* width: 75px; */
    padding-left: 5%;
    padding-right: 5%;
    color: grey;
    background-color: darkgrey;
    color: black;
    align-content: space-between;
    margin: 0 10px;
`
