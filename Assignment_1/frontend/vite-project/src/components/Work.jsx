import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import image from '../assets/react.svg'

const Work = () => {
    const navigate = useNavigate();
        const[route,setRoute] = useState("")
        const[write,setWrite] = useState("")
        const[para,setPara] = useState(false)
        const[value,setValue] = useState("")
    
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

            <div>
                <input type="text" className='w-[20rem] h-[5rem] bg-white relative left-[30%] top-[10rem] rounded-2xl text-center hover:bg-green-400 text-2xl' onChange={(e)=>setValue(e.target.value)}/>
            </div>
            <div className='flex gap-[25rem] text-4xl'>
                <button className='left-[20rem] relative top-[20rem] cursor-pointer border-3 p-[1rem] rounded-4xl' onClick={()=>{setPara(true);alert("written successfully")}}>Write</button>
                <button className='left-[20rem] relative top-[20rem] cursor-pointer  border-3 p-[1rem] rounded-4xl' onClick={()=>{setRoute("home");alert("go to home successfully")}}>Done</button>
            </div>
            {
              para && <p className='text-red-500 text-4xl relative top-[25rem] left-[33rem]'>{value}</p>
            }
    </div>
  )
}

export default Work
