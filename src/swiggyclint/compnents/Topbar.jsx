import React from 'react'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
   <section className='topbarcollection'>
    <div className='companylogo'>
      <Link to='/'> <img src="/logo.png" alt="" />
     </Link>
      
      </div>
    <div className='search'><input type="text" placeholder='Search' /></div>
    <div className='auth'>Login/Signup</div>

   </section>
  )
}

export default Topbar