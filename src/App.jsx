import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './component/Dashboard'
import Error from './component/Error'
import ApexChart from './component/Chart'



const App = () => {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/chart' element = {<ApexChart/>}></Route>
      <Route path='/' element = {<Dashboard/>}></Route>
      <Route path='*' element = {<Error/>}></Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App
