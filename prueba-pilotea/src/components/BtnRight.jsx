import React from 'react'
import FlechaRight from '../assets/Imagenes/icons-medium-right-2.svg'

export default function BtnRight() {
    return (
        <div
            className='btn'
            style={myStyles.CubiertaFlecha}>
            <img style={myStyles.FlechaR} src={FlechaRight} />
        </div>
    )
}

let myStyles = {
    FlechaR: {
        width: '27px',
        height: '24px',
        objectFit: 'contain',
    },

    CubiertaFlecha: {
        width: '62px',
        height: '62px',
        margin: '157px 0 140px 1218px',
        padding: ' 19px 17px 19px 18px',
        boxShadow: ' 0 1px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 3px -2px rgba(0, 0, 0, 0.12), 0 3px 4px 0 rgba(0, 0, 0, 0.14)',
        backgroundColor: ' #00eca1',
        borderRadius: '30px'
    }
}
