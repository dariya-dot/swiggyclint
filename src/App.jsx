import React from 'react'

import './App.css'
import Landingpage from './swiggyclint/pages/Landingpage'
import { Route, Routes } from 'react-router-dom'
import Products from './swiggyclint/compnents/Products'

const App = () => {
  return (
    
    <div>
      <Routes>
        <Route path='/' element={<Landingpage/>} />
        <Route path='/product/:firmId/:firmName' element={<Products/>}/>
      </Routes>
    </div>
  )
}

export default App