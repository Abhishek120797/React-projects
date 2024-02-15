import { useState } from 'react'

import './App.css'
import Card from './components/Card'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
    <div className='flex justify-evenly'>
    <Card  userName="Anchal Jaiswal" btnText="click me" />
    <Card  userName="Sunita Jaiswal" btnText="Visit Me" />
    </div>
    </>
  )
}

export default App
