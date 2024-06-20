import React from 'react'
import banner from '../../assets/banner.png'
import "./index.css"
function Banner() {
  return (
    <header className='banner'>
        <img src={banner} alt="banner" width={1050}height={400}/>
    </header>
  )
}

export default Banner