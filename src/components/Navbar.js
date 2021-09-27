import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import { Navbar as ReactNavbar, Container, Nav } from 'react-bootstrap'
import { Button }  from "react-bootstrap";

import { NAV_ROUTES, HOME } from '../config/routes.config'

import AuthProvider from '../providers/AuthProvider'



export default function Navbar() {
  return (
    <ReactNavbar sticky="top" className="navbar-bg-primary" >
      <Container>
          <ReactNavbar.Brand  href={HOME.path}> {HOME.name} </ReactNavbar.Brand>
          <ReactNavbar.Toggle />
          <Nav>
            {NAV_ROUTES.map(item => <Nav.Link href={item.path} > {item.name} </Nav.Link>)}
          </Nav>
          <ReactNavbar.Collapse className="justify-content-end">
              <Nav>
                  <AuthProvider />
              </Nav>
          </ReactNavbar.Collapse>
      </Container>
    </ReactNavbar>    
  )
}
