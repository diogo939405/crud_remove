import React from 'react'
import { Outlet } from 'react-router-dom'
import './HomeLayout.css'
<link href="https://fonts.cdnfonts.com/css/ropa-sans-2" rel="stylesheet"></link>


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
        <p></p>
      </body>
      <Outlet />
      <footer className='footer'>
        <div>
          <img  className='fotoFooter' src="https://rb1-condominio.com.br/extranet/wp-content/uploads/2023/08/Logo_top1-1-e1653228986853-meno.png" width="53px" height="30px" alt='cabeçalho'></img>
          <p className='TextoRodape'>
            © 2022 RB1. Todos os direitos reservados. Desenvolvido por INETEP
          </p>
          <span className='TextoRodape2'>   📞+55 (21) 2106-1255  <i className=" pi pi-envelope" ></i> rb1@rb1.com.br</span>
        </div>
      </footer>
    </div>

  )
}