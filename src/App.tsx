import { useEffect, useState } from 'react'
import './App.css'

import { quotes } from './quotes';
import _ from 'lodash';


import Logo from './assets/astronomy.png';

function App() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    setQuote(_.sample(quotes) || '')
  })

  return (
    <div className="App">
      <header className="App-header">
      <img className="App-logo" src={Logo} alt="Logo Aplicatação" />
      <h1 className="App-title">Astronomia</h1>
      </header>
      <p className='App-description'>{quote}</p>

      <div className="App-footer">
        <p>Desenvolvido por Dieferson Soares.</p>
      </div>
    </div>
  )
}

export default App
