import React from 'react'
import logo from "../assets/blog.png"
function Logo({width = '100px'}) {
  return (
    <div>
      <img src={logo} alt="logo" className='h-10 w-10' />
    </div>
  )
}

export default Logo