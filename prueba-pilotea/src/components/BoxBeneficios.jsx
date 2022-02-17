import React from 'react'
import Billete from '../assets/Imagenes/icons-medium-pay.svg'
import SeguroP from '../assets/Imagenes/icons-medium-asurance.svg'
import Alcancia from '../assets/Imagenes/icons-medium-gnv.svg'
import Joya from '../assets/Imagenes/icons-medium-agency.svg'

export const BoxBeneficios = () => {
    return (
        <div style={myStyles.beneficiosFooter}>
            <div style={{ position: 'absolute', top: '1%' }}>
                <h2 style={myStyles.lyricsOne}>
                    Beneficios
                </h2>
            </div>
            <div style={{ position: 'absolute', top: '15%' }}>
                <h5 style={myStyles.lyricstwo}>
                    Incluido en tus pagos fijos semanales
                </h5>
            </div>
            <div style={{ position: 'absolute', top: '165px', left: '105px' }}>
                <img style={myStyles.biilleteHand} src={Billete} />
            </div>
            <div style={{ position: 'absolute', top: '165px', left: '360px' }}>
                <img style={myStyles.papel} src={SeguroP} />
            </div>
            <div style={{ position: 'absolute', top: '165px', left: '650px' }}>
                <img style={myStyles.pork} src={Alcancia} />
            </div>
            <div style={{ position: 'absolute', top: '165px', left: '940px' }}>
                <img style={myStyles.diamond} src={Joya} />
            </div>
            <div style={{ position: 'absolute', top: '225px', left: '105px' }}>
                <h5 style={myStyles.EncOne}>Opción de compra</h5>
                <p style={myStyles.DesOne}>Compra el auto a un precio <br/>
                                           preferencial o cambialo por uno<br/>
                                           nuevo, al finalizar tu plazo.
                </p>
            </div>
            <div style={{ position: 'absolute', top: '225px', left: '360px' }}>
                <h5 style={myStyles.EncTwo}>Seguro</h5>
                <p style={myStyles.DesTwo}>Cobertura amplia para tu auto</p>
            </div>
            <div style={{ position: 'absolute', top: '225px', left: '650px' }}>
                <h5 style={myStyles.EncThree}>Equipo de Gas Natural<br/>
                                              Vehicular</h5>
                <p style={myStyles.DesThree}>Ahorra hasta 50% en combustibles.<br/>
                                             Tú eliges si usas gasolina o gas.</p>
            </div>
            <div style={{ position: 'absolute', top: '225px', left: '940px' }}>
                <h5 style={myStyles.EncFour}>Mantenimiento preventivo</h5>
                <p style={myStyles.DesFour}>Cada 5,000 km en talleres<br/>
                                            certificados.</p>
            </div>
        </div>
    )
}

let myStyles = {

    beneficiosFooter: {
        width: '1280px',
        height: '359px',
        margin: '0 31px',
        padding: '0 28px 40px 30px',
        borderRadius: '27px',
        boxShadow: ' 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14)',
        backgroundColor: '#fff',
    },

    lyricsOne: {
        width: '240px',
        height: '50px',
        margin: '40px 880px 0 40px',
        fontFamily: 'Brutalista',
        fontSize: '36px',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#283a3e',
    },

    lyricstwo: {
        width: '452px',
        height: '25px',
        margin: '28px 668px 50px 40px',
        fontFamily: 'Brutalista',
        fontSize: '18px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#283a3e',
    },

    biilleteHand: {
        width: '50px',
        height: '50px',
        margin: '0 220px 10px 0',
        objectFit: 'contain',
    },

    papel: {
        width: '35px',
        height: '50px',
        //backgroundColor: '#283a3e',
    },

    pork: {
        width: '48px',
        height: '35px',
        //backgroundColor: '#283a3e',
    },

    diamond: {
        width: '46px',
        height: '34px',
        //backgroundColor: '#283a3e',
    },

    EncOne: {
        width: '270px',
        height: '20px',
        fontFamily: 'Brutalista',
        fontSize: '18px',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#283a3e',
    },

    DesOne: {
        width: '270px',
        height: '66px',
        //margin: '25px 0 0',
        fontFamily: 'Brutalista',
        fontSize: '16px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#283a3e',
    },

    EncTwo: {
        width: '270px',
        height: '20px',
        fontFamily: 'Brutalista',
        fontSize: '18px',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#283a3e',
    },

    DesTwo: {
        width: '270px',
        height: '22px',
        //margin: '25px 0 0',
        fontFamily: 'Brutalista',
        fontSize: '16px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#283a3e',
    },

    EncThree: {
        width: '270px',
        height: '35px',
        fontFamily: 'Brutalista',
        fontSize: '18px',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#283a3e',
    },

    DesThree: {
        width: '270px',
        height: '44px',
        //margin: '25px 0 0',
        fontFamily: 'Brutalista',
        fontSize: '16px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#283a3e',
    },

    EncFour: {
        width: '270px',
        height: '15px',
        fontFamily: 'Brutalista',
        fontSize: '18px',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#283a3e',
    },

    DesFour: {
        width: '270px',
        height: '44px',
        //margin: '25px 0 0',
        fontFamily: 'Brutalista',
        fontSize: '16px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: '#283a3e',
    },

}
