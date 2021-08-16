import React from 'react'
import { AuthCluster } from './AuthCluster'
import { Navbar, Container, Nav } from 'react-bootstrap'

export const Header = () => {
    return (
        <Navbar sticky="top" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home" color="light"> Fun With Flow </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <AuthCluster />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}