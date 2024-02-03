import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <div>
        <Navbar/>
        <div className='home-bg'></div> 
        <div className='home-text'>
            <h1><Link to = "/clienttype">Start</Link></h1>
        </div>                    
    </div>
  )
}
