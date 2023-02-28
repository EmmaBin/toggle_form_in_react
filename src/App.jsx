import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'

function App() {
  
  const data =['sign up', 'sign in']
  return (
    <div className="App">
      <h1>Sign up / Sign in</h1>
      {data.map(btn=><button> {btn} </button>)}
      <SignUp />
      <SignIn />
    </div>
    

  )
}

export default App
