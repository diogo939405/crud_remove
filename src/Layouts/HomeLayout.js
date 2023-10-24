import React from 'react'
import { Outlet } from 'react-router-dom'
import './HomeLayout.css'

export default function HomeLayout() {
  return (
    <div className='corpo' >
      <header className='cabecalho'>
        <img className='foto' src="https://rb1-condominio.com.br/extranet/wp-content/uploads/2023/08/Logo_top1-1-e1653228986853-meno.png" width="107px" height="61px" alt='cabeçalho'></img>
        <nav className='menu'>
          <span className='menuPalavra'> PRINCIPAL</span>
          <span className='menuPalavra'> ANIVERSARIANTES</span>
          <span className='menuPalavra'> LGPD</span>
          <span className='menuPalavra'>CONTROLE DE ACESSO</span>
          <span className='menuPalavra'> SAIR</span>
        </nav>
      </header>
        <body>
          <p>oie</p>
        </body>
      <Outlet />
      <footer className='footer'>
        <p><img className='fotoFooter' src="https://rb1-condominio.com.br/extranet/wp-content/uploads/2023/08/Logo_top1-1-e1653228986853-meno.png" width="53px" height="30px" alt='cabeçalho'></img></p>
      </footer>
    </div>
    
  )
}