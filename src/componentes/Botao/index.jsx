import React from 'react'
import "./index.css"
function Botao(props) {
  return (
    <button className='botao'>
        {props.children}
    </button>
  )
}

export default Botao