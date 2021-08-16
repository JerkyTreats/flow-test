import React, { useState, useEffect } from "react"
import { Container, Button } from 'react-bootstrap'
import { isInitialized } from '../flow/is-initialized.script'
import * as fcl from "@onflow/fcl"


const CheckAddress = () => {
    const [user, setUser ] = useState({loggedIn: null})
    useEffect(() => fcl.currentUser().subscribe(setUser), [])
    const [ initialized, setInitialized ] = useState('unset')

    const checkInitialize = (address) => {
        console.log(address)
        isInitialized(address).then((fclResult => {
            console.log(fclResult)
            setInitialized(fclResult)
        }))
    }

    const initializedMessage = initialized === 'unset' ? '' : `Initialized: ${initialized.toString()}`

    if (user.loggedIn) {
        return (
            <Container>
                <Button onClick={() => checkInitialize(user.addr) }>Check Address</Button>
                <span> { initializedMessage } </span>
            </Container>
        )
    } else {
        return (
            <Container>
                <Button disabled>Check Address</Button>
                <span>Login to Continue</span>
            </Container>
        )
    }
}

export default CheckAddress
