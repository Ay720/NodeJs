import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './components/Home'
import Work from './components/Work'


const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/work' element={<Work/>}/>
      </Routes>
    </div>
  )
}

export default App
