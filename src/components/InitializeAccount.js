import React, { useState, useEffect } from "react"
import * as fcl from "@onflow/fcl"
import { Container, Button } from 'react-bootstrap'
import { initAccount } from '../flow/init-account.tx'

const InitializeAccount = () => {
    const initButtonBody = 'Initialize Profile'
    const [user, setUser ] = useState({loggedIn: null})
    useEffect(() => fcl.currentUser().subscribe(setUser), [])

    const fclInitializeAccount = () => {
        initAccount().then((fclResult) => {
            console.log(fclResult)
        })
    }

        if (user.loggedIn) {
            return (
                <Container>
                    <Button onClick={ () => fclInitializeAccount() }>{initButtonBody}</Button>
                </Container>
                )
        } else {
            return (
                <Container>
                    <Button disabled>{initButtonBody}</Button>
                </Container>
            )
        }
}

export default InitializeAccount
