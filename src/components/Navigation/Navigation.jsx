import React from 'react'
import './Navigation.scss'
import faztCommunity from '../../img/faztCommunity.png'

const Navegation = () => {
    return (
        <div className="navigation">
            <ul className='navigation__ul-leftSide'>
                {/*for now they are li but when the main components be created we make routes for SPA and use navlink/link*/}
                <li className='navigation__li'>Proyectos</li>
                <li className='navigation__li'>Contribuidores</li>
                <li className='navigation__li'>Inicio</li>
            </ul>
            <img className='navigation__image' src={faztCommunity} alt="fazt-community"/>
            <ul className='navigation__ul-rightSide'>
                <li className='navigation__li'>Registrarse</li>
                <li className='navigation__li'>Iniciar sesión</li>
            </ul>
        </div>
    )
}

export default Navegation
