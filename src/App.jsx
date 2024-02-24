import { useState } from 'react'
import answers from "./answers"
import EightBall from "./EightBall"
import './App.css'

const App = ()=>{

  return (
    <>
      <EightBall answers = {answers} />
    </>
  )
}

export default App
