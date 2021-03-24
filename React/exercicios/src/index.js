import React from 'react'
import ReactDOM from 'react-dom'
//import Primeiro from './componentes/Primeiro'
//import BomDia from './componentes/BomDia'
//import {BoaTarde, BoaNoite} from './componentes/Multiplos'
//import Saudacao from './componentes/Saudacao'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <React.Fragment>
        <Pai nome="Paulo" sobrenome="Ferreira">
            <Filho nome="Pedro"/>
            <Filho nome="Paulo" sobrenome="Silva"/>
            <Filho nome="Carla" sobrenome="Silva"/>
        </Pai>
    </React.Fragment>,
document.getElementById('root'))