import React, {useState, useEffect} from "react"
import * as fcl from "@onflow/fcl"
import { Button, Badge }  from "react-bootstrap";

export default function AuthCluster() {
    const [user, setUser ] = useState({loggedIn: null})
    useEffect(() => fcl.currentUser().subscribe(setUser), [])

    if (user.loggedIn) {
        return (
            <div>
                <Badge bg="dark"> {user?.addr ?? "No Address"} </Badge>
                <Button variant="wallet-login" onClick={fcl.unauthenticate}>Log Out{' '}</Button>
            </div>
)
    } else {
        return (
            <Button variant="wallet-login"  onClick={fcl.logIn}> Wallet Login </Button>
        )
    }
}
