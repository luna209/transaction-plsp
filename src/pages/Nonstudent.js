import React from 'react'
import NavbarSec from "../Components/NavbarSec"
import { Link } from 'react-router-dom'

export default function Nonstudent() {
  return (   
    <div>
      <NavbarSec/>         
        <div className='Non-decoration'></div>
            <div>
              <h1 className='Non-Student-head'>For non student client</h1></div>
              <div className='Non-Box'>{""}
                <h3 className='Non--Stext'> please present the following</h3>
                <ol className='Non--List'>
                  <li>Authorization letter of the owner</li>
                  <li>Photocopy of ID (Owner & Claimer)</li>
                  <li>Documentary stamp</li>
                </ol>
              </div>               
              <div className='Non--Cont'>              
              <h2><Link to = "/clienttype/student"> Continue</Link></h2>              
            </div>
            <div className='Non--backCont'>              
              <h2><Link to = "/clienttype" >back</Link></h2>              
            </div>
    </div>
  )
}
