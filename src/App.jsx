import React, { useState, useRef, useEffect, createElement } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import ToggleableForm from './components/ToggleableForm'

function App() {
  
  const data =[
    { name: 'Sign in', component: SignIn },
    { name: 'Sign up', component: SignUp}
  ]
  return (
    <div className="App">
      <h1>Sign up / Sign in</h1>
      <ToggleableForm props={data} />

    </div>
    

  )
}



export default App
