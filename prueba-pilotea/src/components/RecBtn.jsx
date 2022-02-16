import React from 'react'



export const RecBtn = () => {
  return (
    <div
     className='btn shadow  rounded-pill'
     style={myStyles.btnGenGre}>
      Solicitar mi auto
     </div>
  )
}

let myStyles ={
  btnGenGre:{
    width: "143px",
    height: "40px",
    font: "Brutalista",
    color: "#283a3e",
    background: "#00eca1"
  }
} 
