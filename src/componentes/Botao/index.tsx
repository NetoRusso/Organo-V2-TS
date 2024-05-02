import { ReactElement } from 'react'
import './Botao.css'
import React from "react"

interface BotaoProps {
  children: ReactElement
}

const Botao = ( {children}:BotaoProps) => {
  return (
  <button className='botao'>
    {children}
  </button>)
}

export default Botao
