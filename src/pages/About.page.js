import React from 'react'
import { HOME } from '../config/routes.config'
import Readme, { README } from '../components/Readme'
import ReactMarkdown from 'react-markdown'

export default function About() {
  const msg = `_Below is the [README](${README}) for this [Repo](https://github.com/JerkyTreats/flow-test)_`
  return (
    <>
    <div className="header-default">
      <h1>{HOME.name}</h1>
      <p>This is an experiment.</p>
      <p> <ReactMarkdown>{msg}</ReactMarkdown> </p>
    </div>

    <div className="d-flex justify-content-center about-readme">
     {Readme()}
    </div>
    </>
  )
}
