import React from 'react'
import FlechaLeft from '../assets/Imagenes/icons-medium-left-2.svg'

export const BtnLeft = () => {
    return (
        <div 
        className='btn'
        style={myStyles.CubiertaFlecha}>
            <img style={myStyles.FlechaL} src={FlechaLeft} />
        </div>
    )
}

let myStyles = {

    FlechaL: {
        width: '27px',
        height: '24px',
        objectFit: 'contain',
    }, 

    CubiertaFlecha:{
        width: '62px',
        height: '62px',
        margin: '157px 1218px 140px 0',
        padding: '19px 18px 19px 17px',
        boxShadow: '0 1px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 3px -2px rgba(0, 0, 0, 0.12), 0 3px 4px 0 rgba(0, 0, 0, 0.14)',
        backgroundColor: '#00eca1',
        borderRadius: '30px'
    }
}