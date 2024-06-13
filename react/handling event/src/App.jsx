import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function click() {
  alert("clicked");
}

function mouse() {
  alert("mouse over");
}


function App() {
  
  const [name, setname] = useState('ayush')
  const [Form, setForm] = useState({email : '', password : ''})

function change(e) {
  setname(e.target.value);
}

function formchange(e) {
  setForm({...Form, [e.target.name]: e.target.value});
  console.log(Form);
}

  return (
    <>
      <button onClick={click} >Click me</button>
     

      <div className="red" onMouseOver={mouse}></div>


      <input type="text" value={name}  onChange={change}/>

    <br />
    <hr />
      <input type="text" name='email' value={Form.email?Form.email: " "}  onChange={formchange}/>
      <input type="text" name='password' value={Form.password?Form.password: " "} onChange={formchange}/>

    </>
  )
}

export default App
