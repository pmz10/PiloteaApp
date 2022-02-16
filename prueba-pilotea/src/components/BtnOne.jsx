import React from 'react'

export const BtnOne = () => {
    return (
        <div
            className='btn shadow  rounded-pill'
            style={myStyles.btnGenGre}>
            <p style={myStyles.lyricsOne}>Solicita un auto en minutos</p>
        </div>
    )
}

let myStyles = {
    btnGenGre: {
        width: "259px",
        height: "62px",
        margin: '30px 333px 141px 80px',
        padding: '20px',
        borderRadius: '30px',
        boxShadow: '0 1px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 3px -2px rgba(0, 0, 0, 0.12), 0 3px 4px 0 rgba(0, 0, 0, 0.14)',
        background: "#00eca1",
    },

    lyricsOne: {
        width: '219px',
        height: '22px',
        fontFamily: 'Brutalista',
        fontSize: '16px',
        fontWeight: '500',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        textAlign: 'center',
        color: '#283a3e'
    }
} 
