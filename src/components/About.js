import React from 'react'
import { useContext } from 'react'
import NoteContext from '../contexts/notes/NoteContext'

const About = () => {
  const a = useContext(NoteContext)

  return (
    <div>
      <h1>This is about {a.state.name}</h1>
    </div>
  )
}

export default About
