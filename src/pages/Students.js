import React from 'react'
import NavbarSec from '../Components/NavbarSec'
import { Link } from 'react-router-dom'

export default function Student() {
  return (
    <div>
        <NavbarSec/>
        <div className='student--format'></div>
        <div>
          <div  className='student--type'>
              <h1>please select transaction type</h1>
          </div>
          <div className='student--cert'>
              <h2><Link to = "/clienttype/student/requestcertificate">request certificate</Link></h2>
          </div>
          <div className='student--cred'>
              <h2><Link to ="clienttype/student/requestcredential">request credential</Link></h2>
          </div>
          <div className='student--other'>
              <h2><Link to = "clienttype/student/otherdocument">request other documents</Link></h2>
          </div>
        </div>
    </div>
  )
}