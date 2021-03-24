import React from 'react'
import ReactDOM from 'react-dom'
//import Primeiro from './componentes/Primeiro'
//import BomDia from './componentes/BomDia'
//import {BoaTarde, BoaNoite} from './componentes/Multiplos'
//import Saudacao from './componentes/Saudacao'

import Pai from './componentes/Pai'

ReactDOM.render(
    <React.Fragment>
        <Pai nome="Paulo" sobrenome="Ferreira"/>
    </React.Fragment>,
document.getElementById('root'))