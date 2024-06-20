import React from 'react'
import "./index.css"
import ig from "../../assets/ig.png"
import fb from "../../assets/fb.png"
import tw from "../../assets/tw.png"
import logo from "../../assets/logo.png"
function Rodape() {
  return (
    <div className='rodape'>
        <div className='redes'>
            <img src={fb} alt="logo Facebook" />
            <img src={tw} alt="logo Twitter" />
            <img src={ig} alt="logo Instagram" />
        </div>
        <div className='logo'>
            <img src={logo} alt="logo organo" />
        </div>
        <div className='desenvolvedor'>
            <h6>
                Desenvolvido por <a href="https://github.com/matheuscp23?tab=repositories">Matheus Campos Penteado.</a>
            </h6>
        </div>
    </div>
  )
}

export default Rodape