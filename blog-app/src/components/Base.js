import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';


const Base=({title = "Hello" , children}) => {
  return (
    <div>
        <Navbar/>
      {children}
      <Footer/>
    </div>
  )
}

export default Base;
