import React from 'react'
import Logo from '../Image/Logo.png'

export default function Navbar() {
  return (
        <header>
            <nav className='navbar'> 
                <div className='logo'>
                    <img src={Logo} alt="Logo"/>
                </div>
                <div className='device-name'>
                    <h1>PLSP E-Transaction</h1>
                </div>
                <div>
                    <div className='lang'>
                        English 
                    </div>
                </div>
            </nav>
        </header>
  )
}
