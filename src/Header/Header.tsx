
import React from 'react'

import './style.css'

import Logo from '../assets/astronomy.png'
import Menu from '../Menu/Menu'

export default function Header() {
    return (
        <div className='h-screen w-screen flex flex-col items-center p-10'>

        <header className="container md-auto">
            <img className="App-logo" src={Logo} alt="Logo Aplicatação" />
            
        {/* <Menu /> */}
      </header>
        </div>
    )
}