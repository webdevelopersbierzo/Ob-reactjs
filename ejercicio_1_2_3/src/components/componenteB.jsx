import React, { useState }from 'react'
import PropTypes from 'prop-types'


function ComponenteB(props) {

    const [conect, setConect] = useState(props.conectado);
    return (
        <div>
            <h3> {conect === false ? "Contacto no disponible": "Contacto En linea"}</h3>
            <button onClick={()=>setConect(!conect)}>{(conect === false ? 'Conectar': 'Desconectar')}</button>
        </div>
    )
}


ComponenteB.propTypes = {

}

export default ComponenteB

