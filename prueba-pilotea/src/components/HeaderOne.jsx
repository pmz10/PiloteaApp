import React from 'react'
import { RecBtn } from './RecBtn'

export const HeaderOne = () => {
  return (
    <div className="container">
        <nav className="nav-main">
            <img src='../../../assets/EquipoFut.png'/>
            <ul className="nav-menu show">
                <li>
                <a href="#">Inicio</a>
                </li>
                <li>
                <a href="#">Autos</a>
                </li>
                <li>
                <a href="#">Benefcios</a>
                </li>
                <li>
                <a href="#">Contacto</a>
                </li>
                <li>
                <a href="#">Iniciar sesión</a>
                </li>
                <li>
                <RecBtn />
                </li>
                </ul>
        </nav>
        
        <hr/>
        
    </div>    
  )
}

