import React from 'react'
import ReactDOM from 'react-dom'
//import Primeiro from './componentes/Primeiro'
//import BomDia from './componentes/BomDia'
import {BoaTarde, BoaNoite} from './componentes/Multiplos'
//JSX

ReactDOM.render(
    <React.Fragment>
        <BoaTarde nome = "Boanerges" idade="23"/>
        <BoaNoite nome = "João" idade="30"/>
    </React.Fragment>,
    document.getElementById('root'))