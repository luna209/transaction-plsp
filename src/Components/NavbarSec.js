import React from 'react'
import Logo from '../Image/Logo.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
        <header>
            <nav> 
                <div className='logo2'> 
                    <img src={Logo} alt="Logo"/>
                </div>
                <div className='device-name2'>
                    <h1>PLSP E-Transaction</h1>
                </div>
                <div>
                        <h2 className='Home--click2'><Link to = "/">Home</Link></h2>
                </div>
            </nav>
        </header>
  )
}
