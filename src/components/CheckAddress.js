import React, { useState, useEffect } from "react"
import { Container, Button } from 'react-bootstrap'
import { isInitialized } from '../flow/is-initialized.script'
import * as fcl from "@onflow/fcl"


const CheckAddress = () => {
    const [user, setUser ] = useState({loggedIn: null})
    useEffect(() => fcl.currentUser().subscribe(setUser), [])
    const [ initialized, setInitialized ] = useState(false)

    const checkInitialize = (address) => {
        isInitialized(address).then((fclResult => {
            setInitialized(fclResult)
        }))
    }

    if (user.loggedIn) {
        return (
            <Container>
                <Button onClick={() => checkInitialize(user.addr) }>Check Address</Button>
                <span> { initialized.toString() } </span>
            </Container>
        )
    } else {
        return (
            <Button disabled>Check Address </Button>
        )
    }
}

export default CheckAddress
