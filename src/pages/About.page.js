import React from 'react'
import { HOME } from '../config/routes.config'
import Readme, { README } from '../components/Readme'
import ReactMarkdown from 'react-markdown'

export default function About() {
  const test = `_Below is the [README](${README}) for this [Repo](https://github.com/JerkyTreats/flow-test)_`
  return (
    <>
    <div className="about-section">
      <h1>{HOME.name}</h1>
      <p>This is an experiment.</p>
      <p> <ReactMarkdown>{test}</ReactMarkdown> </p>
    </div>

    <div className="d-flex justify-content-center about-readme">
     {Readme()}
    </div>
    </>
  )
}