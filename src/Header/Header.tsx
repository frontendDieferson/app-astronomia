
import React from 'react'

import './style.css'

import Logo from '../assets/astronomy.png'
import Menu from '../Menu/Menu'

export default function Header() {
    return (
        <div className='App-header'>
            <img className="App-logo" src={Logo} alt="Logo Aplicatação" />
            <h1>Frases da Astromia</h1>
            
        {/* <Menu /> */}
     
        </div>
    )
}