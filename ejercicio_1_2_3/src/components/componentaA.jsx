import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../models/contacto.class'
import ComponenteB from './componenteB'

function componenteA(props) {
    return (
        <div>
            <h2>Nombre: { props.name}</h2>
            <h3>Apellidos: { props.surname}</h3>
            <h3>Email: { props.email}</h3>
            <ComponenteB conectado = {true}></ComponenteB>
        </div>
    )
}

componenteA.propTypes = {
    props:PropTypes.instanceOf(Contacto)
}

export default componenteA

