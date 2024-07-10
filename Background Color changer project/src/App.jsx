import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('grey');

  return (
    <>
     <div className='home'
     style={{backgroundColor:color}}>

      <div className='flex bottom-4 gap-3 m-14 fixed justify-center '>
        <button className='bg-yellow-400 '  onClick={()=>{setColor('yellow')}}>yellow</button>
        <button className='bg-red-500 '  onClick={()=>{setColor('red')}}>red</button>
        <button className='bg-blue-400 '  onClick={()=>{setColor('blue')}}>blue</button>
        <button className='bg-green-400 '  onClick={()=>{setColor('green')}}>green</button>
      </div>

     </div>
    </>


  )
}

export default App
