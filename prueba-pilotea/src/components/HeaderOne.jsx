import React from 'react'
import { RecBtn } from './RecBtn'
import Pillog from '../assets/Imagenes/branding-imagotipo-horizontal-full-color.svg'

export const HeaderOne = () => {
  return (
    <div
      style={myStyles.styleContainer}
    >
      <nav
        style={myStyles.navmain}
      >
        <div style={{ width: '100px', height: '20px' }}>
          <img style={{ marginLeft: '40px', marginTop: '13px' }} src={Pillog} />
        </div>
        <ul
          style={{ display: 'flex', borderWidth: '5px', borderColor: 'orange' }}
        >
          <li
            style={myStyles.ul}
          >
            <a href="#"
              style={myStyles.a}
            >Inicio</a>
          </li>
          <li
            style={myStyles.ul}
          >
            <a href="#"
              style={myStyles.a}
            >Autos</a>
          </li>
          <li
            style={myStyles.ul}
          >
            <a href="#"
              style={myStyles.a}
            >Benefcios</a>
          </li>
          <li
            style={myStyles.ul}
          >
            <a href="#"
              style={myStyles.a}
            >Contacto</a>
          </li>
          <div
            style={myStyles.Path}
          >

          </div>
          <li
            style={myStyles.ul}
          >
            <a href="#"
              style={myStyles.a}
            >Iniciar sesión</a>
          </li>
          <li
            style={{ listStyle: 'none', padding: '16px'}}
          >
           <div>
            <RecBtn />
           </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}

let myStyles = {
  styleContainer: {
    width: '100%',
    height: '70px',
    margin: 'auto',
    
  },

navmain: {
  fontSize: '17px',
    display: 'flex',
      justifyContent: 'space-between',
        alignItem: 'center',
          height: '60px',
            padding: '20',
  },

ul: {
  listStyle: 'none',
    padding: '25px',
  },
a: {
  color: '#283a3e',
    textDecoration: 'none',
  },
Path: {
  width: '1px',
    height: '70px',
      border: 'solid 1px #e5e4e1',
  }
  
}


