import React from 'react'
import NavbarSec from "../Components/NavbarSec"
import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom';

export default function Certificate () {
    const [cog,setcog]=useState(true);
    const [second,setsecond]=useState(true);
    const [coe,setcoe]=useState(true);
    const [cohaw,setcohaw]=useState(true);
    const [cav,setcav]=useState(true);
    
    const handlesubmit=(data)=>{ 
      data.preventDefault();
      const addobj = { cog, second, coe, cohaw, cav};
     
    

    fetch("http://localhost:3000/clienttype/student/requestcertificate", {
      method:"ADD", 
      headers: { "content-type": "application/json"},
      body: JSON.stringify(addobj)
    }).then(() => {
      Navigate(+1);
    }).catch((err) => {
      console.log(err.messsage)
    })
  }

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <header><NavbarSec/></header>
        <div className='the--background'>("")</div>
          <div className='title--cert'>
            <h1>Select certificate</h1>
          </div>
        <form className='page--format--cert'>            
            <div className='input--format--cert'> 
                <input type='checkbox' value={cog} onChange={data => setcog(data.target.value)}/> <label>certificate of grade</label> <br/>
                <input type='checkbox' value={second} onChange={data => setsecond(data.target.value)}/> <label>Certificate of graduation</label> <br/>
                <input type='checkbox' value={coe} onChange={data => setcoe(data.target.value)} /> <label>Certification of enrollment</label> <br/>
                <input type='checkbox' value={cohaw} onChange={data => setcohaw (data.target.value)}/> <label>certificate of honor/award received</label> <br/>
                <input type='checkbox' value={cav} onChange={data => setcav (data.target.value)}/> <label>Cav(Certification, Authentication & verification)</label> <br/>
            </div>
        </form>
        <div>
          <button className='btn--continue' type='submit'>
            <Link to="/clienttype/student/requestcertificate/documentreview" >Continue</Link>
          </button>
          
        </div>
        </form>
           <button className='btn--back'>
            <Link to="/clienttype/student">back</Link>
          </button>
    </div>
  )
}