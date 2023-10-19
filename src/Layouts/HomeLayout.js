import React from 'react'
import { Outlet } from 'react-router-dom'
import  './HomeLayout.css'

export default function HomeLayout() {
  return (
    <div className ='corpo' >
        <header className='cabecalho'>
            <img src="../imagens/logo.png" height="110px" alt='cabeçalho'></img>
                      fefef
        </header>
   <body >
        <div className>

        </div>
   </body>
    <Outlet/>
    </div>
  )
}
