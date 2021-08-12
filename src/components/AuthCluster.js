import React, {useState, useEffect} from "react"
import * as fcl from "@onflow/fcl"
import styled from "styled-components";


export function AuthCluster() {
    const [user, setUser ] = useState({loggedIn: null})
    useEffect(() => fcl.currentUser().subscribe(setUser), [])

    if (user.loggedIn) {
        return (
            <LoginDiv >
                <span>{user?.addr ?? "No Address"}</span>
                <LoginButton onClick={fcl.unauthenticate}>Log Out</LoginButton>
            </LoginDiv>
        )
    } else {
        return (
            <div>
                <LoginButton onClick={fcl.logIn}>Log In</LoginButton>
                <LoginButton onClick={fcl.signUp}>Sign Up</LoginButton>
            </div>
        )
    }
}

export const LoginDiv = styled.div`
    width: 200px;
    height: 100px;
    background-color: darkslateblue;
`

const LoginButton = styled.button`
    width: 60px;
    height: 45px;
    padding-left: 0%;
    padding-right: 10%;
    color: grey;
`
