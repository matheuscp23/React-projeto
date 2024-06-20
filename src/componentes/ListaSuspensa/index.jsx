import React from 'react'
import "./index.css"

function ListaSuspensa(props) {
  return (
    <div className='lista'>
        <label>{props.label}</label>
        <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
            <option value="">Selecione</option>
            {props.itens.map(item => {
                return <option key={item}>{item}</option>
            })}
        </select>
    </div>
  )
}

export default ListaSuspensa