import React, { useEffect } from 'react'
import { useState } from 'react';
import { itemData } from '../../../data';
const Itemsdisplay = () => {
  const [itemDisplay, setItemDisplay] = useState([]);
  console.log(itemDisplay)
  useEffect(()=>{
    setItemDisplay(itemData.slice(0,-1))
  },[])
  return (
    <div className="itemSection">
      {itemDisplay.map((item)=>{
        return(
          <div className='itemImages' key={item.item_image}>
            <img src={item.item_image} />  
            <h5>{item.name}</h5>
          </div>
          
        )
      })}
    </div>
  )
}

export default Itemsdisplay