import React from 'react'
import { useState,useEffect } from 'react'
import { API_URL } from '../../../API/api'
import { Link } from 'react-router-dom'
const Firmcollections = () => {
  const [firmdata,setFirmdata]=useState([])
  const [selectRegion,setSelectRegion]=useState('All')
  const firmDataHandler=async()=>{
    try {
      const response = await fetch(`${API_URL}vender/all-venders`)
      const data=await response.json()
      setFirmdata(data.venders)
      console.log(data.venders)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(()=>{firmDataHandler()},[])
  const filterHandler=(region)=>{
    setSelectRegion(region)

  }

  return (
   <>
   <div className='gridheading'><h3>Restaurants with online food delivery in Hydrabad</h3></div>
   
   <div className="filterButtons">
    <button className="btn btn-primary" onClick={()=>filterHandler('All')}>All</button>
    <button onClick={()=>filterHandler('SouthIND')}>SouthIND</button>
    <button onClick={()=>filterHandler('NortIND')}>NortIND</button>
    <button onClick={()=>filterHandler('Bakery')}>Bakery</button>
    <button onClick={()=>filterHandler('Chenies')}>Chenies</button>
   </div>
   <section>
    <div className="gridsection">
      {firmdata.map((vender)=>{
        return vender.firm.map((item)=>{
          if(selectRegion==='All' || item.region.includes(selectRegion)){
            return(
              <Link to={`/product/${item._id}/${item.firmName}`} key={item._id} className='link'>
                <div className='gridbox'  >
                      <div className="gridboximg">
                        <div className='firmimage' >
                          <img src={`${API_URL}product/uploads/${item.image}`} alt='image not avilable'/>
                        </div>
                        <div className='gridfirmoffer'>
                          {item.offer}
                        </div>
                      </div>
                    

                    <div className='gridfirmdetails'>
                        <ul>
                          <li style={{color:"black"}}><strong>{item.firmName}</strong></li>
                          <li>{item.area}</li>
                          <li>{item.region.join(', ')}</li>
                        </ul>
                    </div>
                    
                </div>
              </Link>
              )
          }return null
        })
        
        // return(
        //   <>
        //     {vender.firm.map((item)=>{
        //       return(
        //       <Link to={`/product/${item._id}/${item.firmName}`} className='link'>
        //         <div className='gridbox' key={item._id} >
        //               <div className="gridboximg">
        //                 <div className='firmimage' >
        //                   <img src={`${API_URL}product/uploads/${item.image}`} alt='image not avilable'/>
        //                 </div>
        //                 <div className='gridfirmoffer'>
        //                   {item.offer}
        //                 </div>
        //               </div>
                    

        //             <div className='gridfirmdetails'>
        //                 <ul>
        //                   <li style={{color:"black"}}><strong>{item.firmName}</strong></li>
        //                   <li>{item.area}</li>
        //                   <li>{item.region.join(', ')}</li>
        //                 </ul>
        //             </div>
                    
        //         </div>
        //       </Link>
        //       )
        //     })}
          
        //   </>
        // )
      })}
    </div>
   </section>
   </>
  )
}

export default Firmcollections
