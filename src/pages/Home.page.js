import React from 'react'
import { Container } from 'react-bootstrap'
import CheckAddress from '../components/CheckAddress'
import InitializeAccount from '../components/InitializeAccount'

export default function Home() {
  return (
    <>
      <div className="header-default">
        <h2> Home </h2>
      </div>

      <Container>
        <div className="d-flex justify-content-center">
          {CheckAddress()}
          {InitializeAccount()}
        </div>
      </Container>
    </>
  )
}
