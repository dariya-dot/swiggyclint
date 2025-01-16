import React from 'react'
import Topbar from '../compnents/Topbar'
import Itemsdisplay from '../compnents/Itemsdisplay'
import Chains from '../compnents/Chains'
import Firmcollections from '../compnents/Firmcollections'


const Landingpage = () => {
  return (
    <div>
      <Topbar/>
      <div className='landingsection'>
      <Itemsdisplay/>
      <Chains/>
      <Firmcollections/>
      
      </div>
      
    </div>
  )
}

export default Landingpage
