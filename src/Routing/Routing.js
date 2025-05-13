
import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appbar from '../Components/Navbar/Appbar';
import Notfound from '../Pages/Notfound/Notfound';
import Home from '../Pages/Home';
import Footer from '../Components/Footer/Footer';
import Wedding from '../Pages/Weding/Wedding';
import AboutUs from '../Components/AboutUs/AboutUs';
import OurProducts from '../Components/OurProducts/OurProducts';
import Cart from '../Components/Cart/Cart';
import SignIn from '../Components/SignIn/SignIn';
import SignUp from '../Components/SignUp/SignUp';

const Routing = () => {
  return (
    <BrowserRouter>
     <Appbar/>
      <Routes>
          <Route index element={<Home/>} />
          <Route path='*' element={<Notfound/>}/>
          <Route path='/wedding' element={<Wedding/>}/>
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/product' element={<OurProducts/>}/>
          <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  )
}

export default Routing