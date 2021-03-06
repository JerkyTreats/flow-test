import React from 'react'
import { NavLink } from "react-router-dom"
import { Navbar as ReactNavbar, Container } from 'react-bootstrap'
import { NAV_ROUTES, HOME } from '../config/routes.config'



export default function Navbar({children}) {
  return (
    <ReactNavbar sticky="top" className="navbar-custom" >
      <Container>
          <ReactNavbar.Brand  href={HOME.path}> {HOME.name} </ReactNavbar.Brand>
          <ReactNavbar.Toggle />
            {NAV_ROUTES.map(route => NavItem(route))}
          <ReactNavbar.Collapse className="justify-content-end">
            {children}
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
