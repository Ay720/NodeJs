import React, { useEffect, useState } from 'react'
import image from '../assets/react.svg'
import xyz from '../assets/xyz.avif'
import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();
    const[route,setRoute] = useState("")

     useEffect(() => {
   if(route=="work")
    navigate('/work')
   else if(route=="home")
    navigate('/')

}, [route])
  return (
   

    <div className='bg-amber-100 min-h-screen'>


      <nav className='flex items-center justify-between px-10 h-20 bg-amber-400 shadow-md'>


        <div className='flex items-center gap-4'>
          <img src={image} alt="logo" className='h-12 w-12' />
          <h1 className='text-3xl font-bold'>My Site</h1>
        </div>

     
        <div className='flex gap-10 text-2xl font-semibold'>
          <p className='cursor-pointer hover:text-white' onClick={()=>setRoute("home")}>Home</p>
          <p className='cursor-pointer hover:text-white'onClick={()=>setRoute("work")}>Work</p>
        </div>

      </nav>

  
      <div className='flex items-center justify-center mt-20 gap-20'>

        <img 
          src={xyz} 
          alt="college" 
          className='h-64 w-64 rounded-xl shadow-lg'
        />

        <h2 className='text-4xl font-bold'>
          ABES ENGINEERING COLLEGE
        </h2>

      </div>

    </div>
  )
}

export default Home
