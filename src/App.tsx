import { useEffect, useState } from 'react'
import './App.css'
import { TwitterIcon, 
  TwitterShareButton, 
  WhatsappShareButton, 
  WhatsappIcon, 
  FacebookShareButton, 
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon, 
  InstapaperShareButton,
  InstapaperIcon} from 'react-share';
import { quotes } from './quotes';
import _ from 'lodash';


import Header from './Header/Header';

function App() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    setQuote(_.sample(quotes) || '')
  },[])

  return (
    <div className="container">
      <Header />
      <p className='App-description'>
        {quote}</p>

        <button
        className='App-button'
        onClick={() => setQuote(_.sample(quotes) || '')}>Atualizar</button>
    <div className='App-share'>
      <span>Compartilhe</span>
      <div className='App-share-icons'>

      <TwitterShareButton
        title={`${quote}
        \nvia: `}
        url={'https://app-astronomia.vercel.app/'}
        >
        <TwitterIcon size={24} round />
      </TwitterShareButton>
      <WhatsappShareButton 
        title={`${quote}
        \nvia: `}
        url={'https://app-astronomia.vercel.app/'}  
        >
        <WhatsappIcon size={24} round />
      </WhatsappShareButton>
      <FacebookShareButton 
        title={`${quote}
        \nvia: `}
        url={'https://app-astronomia.vercel.app/'} 
      >
        <FacebookIcon size={24} round />
      </FacebookShareButton>

      </div>

    </div>
      <div className="App-footer">
        <p>Desenvolvido por Dieferson Soares ♥.</p>
      </div>
    </div>
  )
}

export default App
