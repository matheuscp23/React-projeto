import React from 'react'
import "./index.css"
const CampoTexto = (props) => {
  const aoDigitar = (e) => {
    props.aoAlterado(e.target.value)
  }
  return (
    <div className='form-group'>
        <label>{props.label}</label>
        <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder}/>

    </div>
  )
}

export default CampoTexto