import React from 'react'
import { NavLink } from "react-router-dom"
import { Navbar as ReactNavbar, Container, Nav } from 'react-bootstrap'
import { NAV_ROUTES, HOME } from '../config/routes.config'
import AuthProvider from '../providers/AuthProvider'



export default function Navbar() {
  return (
    <ReactNavbar sticky="top" className="navbar-custom" >
      <Container>
          <ReactNavbar.Brand  href={HOME.path}> {HOME.name} </ReactNavbar.Brand>
          <ReactNavbar.Toggle />
          <Nav>
            {NAV_ROUTES.map(route => NavItem(route))}
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

const NavItem = (route) => {
  return (
    <NavLink 
      className="navitem"
      activeClassName="navitem-active"
      to={route.path} 
      > 
        {route.name} 
    </NavLink>
  )
}
