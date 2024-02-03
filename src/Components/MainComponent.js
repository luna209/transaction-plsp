import React from 'react'
import { Link } from 'react-router-dom'


export default function MainComponents() {
  return (
    <div >
      <div className='bg'></div>
        <h1 className='title-bg'>SELECT STUDENT TYPE</h1>
        <div className='button'> 
          <button className='bg-buttonR'>
            <h2><Link to = "/clienttype/student" > Student </Link></h2> 
          </button>
          <button className='bg-buttonC'>
            <h2><Link to = "/clienttype/nonstudent">Non-Student</Link></h2>            
          </button>
        </div>
    </div>
  )
}
