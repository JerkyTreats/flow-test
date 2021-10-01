import React from 'react'
import { Button, Badge } from 'react-bootstrap'
import * as fcl from "@onflow/fcl"
import { useAuth } from '../providers/AuthProvider'

const Login = () => {

    const authContext = useAuth()

    if (authContext.loggedIn) {
        return (
            <div>
                <Badge bg="dark"> {authContext.user?.addr ?? "No Address"} </Badge>
                <Button variant="wallet-login" onClick={fcl.unauthenticate}>Log Out{' '}</Button>
            </div>
        )
    } else {
        return (
            <Button variant="wallet-login"  onClick={fcl.logIn}> Wallet Login </Button>
        )
    }
}

export default Login
