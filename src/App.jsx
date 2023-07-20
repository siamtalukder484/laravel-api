import { useState } from 'react'
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Service from './pages/Service'
import Contact from './pages/Contact'
import About from './pages/About'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import RootLayouts from './layouts/RootLayouts'
import Registration from './pages/Registration'



function App() {

  const siam = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route element={<RootLayouts/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/registration' element={<Registration/>}/>
      </Route>
      </>
      
    )
  );

  return (
   <>
      <RouterProvider
        router={siam}
      />
   </>
  )
}

export default App
