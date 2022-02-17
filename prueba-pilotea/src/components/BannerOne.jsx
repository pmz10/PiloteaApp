import React from 'react'
import { BtnOne } from './BtnOne'
import AutoImg from '../assets/Imagenes/bitmap@3x.webp'
import { BoxBeneficios } from './BoxBeneficios'

export const BannerOne = () => {
  return (
    <div
      style={{ width: '100%', height: '1237px', padding: '0 0 97px', backgroundImage: 'linear-gradient(to bottom, #fde1ad 80%, #00eca1)' }}
    >
      <div style={myStyles.cartelOne}>
        <h1 style={myStyles.lyricsOne}>¿Eres conductor de Uber</h1>
        <h1 style={myStyles.lyricsOne}>o Didi y rentas un auto o</h1>
        <h1 style={myStyles.lyricsOne}>quieres cambiarlo?</h1>
      </div>
      <div style={{ width: '584px', height: '50px', position: 'absolute', top: '431px', left: '80px' }}>
        <p style={myStyles.lyricsTwo}>¡Pilotea es para ti!</p>
      </div>
      <div style={{ width: '584px', height: '66px', position: 'absolute', top: '431px', left: '80px' }}>
        <p style={myStyles.lyricsThree}>Compra un auto nuevo con pagos fijos semanales
          accesibles.
        </p>
      </div>
      <div style={{ width: '584px', height: '66px', position: 'absolute', top: '607px', left: '80px' }}>
        <BtnOne />
      </div>
      <div style={{position: 'absolute', top: '149px', right: '12%', width:'719px', height:'538px'}}>
          <img 
            style={myStyles.boxAuto} 
            src={AutoImg} />
      </div>
      <div style={{position: 'absolute', top: '780px', left: '15%'}}>
        <BoxBeneficios />
      </div>
    </div>
  )
}

let myStyles = {
  cartelOne: {
    width: '584px',
    height: '198px',
    margin: '93px 8px 70px 80px',
    top: '163px',
    left: '80px',
    position: 'absolute'
  },

  lyricsOne: {
    color: '#283a3e',
    fontFamily: 'Brutalista',
    fontSize: '48px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal'
  },

  lyricsTwo: {
    margin: '70px 8px 0 80px',
    fontFamily: 'Brutalista',
    fontSize: '36px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#283a3e',
  },

  lyricsThree: {
    margin: '120px 8px 30px 80px',
    fontFamily: 'Brutalista',
    fontSize: '24px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#283a3e'
  },

  boxAuto: {
    width: '719px',
    height: '538px',
    marginTop: '79px',
    marginBottom:'49px',
    marginLeft:'93',
    marginRight:'8px',
    objectFit: 'contain'
  }
}