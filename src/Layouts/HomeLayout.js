import React from 'react'
import { Outlet } from 'react-router-dom'
import '../menu/menu'
import './HomeLayout.css'
<link href="https://fonts.cdnfonts.com/css/ropa-sans-2" rel="stylesheet"></link>


export default function HomeLayout() {
  return (
    <div className='corpo' >
      <header className='cabecalho'>
        <img className='foto' src="https://rb1-condominio.com.br/extranet/wp-content/uploads/2023/08/Logo_top1-1-e1653228986853-meno.png" width="107px" height="61px" alt='cabeçalho'></img>
        <div class="container">
          <nav class="navbar">
            <ul class="nav-links">
              <li class="nav-link">
                <div className='drop-down-catch'>
                  <a href="https://rb1-condominio.com.br/extranet/">PRINCIPAL</a>
                </div>
              </li>
              <span class="nav-link-detail">|</span>

              <li class="nav-link">
                <div className='drop-down-catch'>
                  <a href="https://rb1-condominio.com.br/extranet/aniversariantes/">ANIVERSARIANTES</a>
                </div>
              </li>
              <span class="nav-link-detail">|</span>

              <li class="nav-link">
                <div className='drop-down-catch'>
                  <a href="https://rb1-condominio.com.br/extranet/lgpd/">LGPD</a>
                </div>
              </li>
              <span class="nav-link-detail">|</span>


              <li class="nav-link services">
                <div className='drop-down-catch'>
                  <a href="https://rb1-condominio.com.br/extranet/seguranca/">SEGURANÇA +
                  </a>
                  <ul class="drop-down">
                    <a id='submenu' href='https://rb1-condominio.com.br/extranet/seguranca-celulares-e-tablets/'><li>CARTILHAS</li></a>
                    <a id='submenu' href='https://rb1-condominio.com.br/extranet/seguranca/'><li>MANUAIS</li></a>
                  </ul>
                </div>
              </li>
              <span class="nav-link-detail">|</span>
              <li class="nav-link services">
                <div className='drop-down-catch'>
                  <a href="https://rb1-condominio.com.br/extranet/cadastro/">CONTROLE DE ACESSO +
                  </a>
                  <ul class="drop-down">
                   <a id='submenu' href='https://rb1-condominio.com.br/extranet/cadastro/'><li>ADICIONAR</li></a> 
                   <a id='submenu' href='#'><li>REMOVER</li> </a> 

                  </ul>
                </div>
              </li>

              <span class="nav-link-detail">|</span>
             
              
              
              <li class="nav-link">
                <div className='drop-down-catch'>
                  <a href="#">SAIR</a>
                </div>
              </li>

            </ul>
          </nav>
        </div>
      </header>
      <body>
        <p></p>
      </body>
      <Outlet />
      <footer className='footer'>
        <div>
          <img className='fotoFooter' src="https://rb1-condominio.com.br/extranet/wp-content/uploads/2023/08/Logo_top1-1-e1653228986853-meno.png" width="53px" height="30px" alt='cabeçalho'></img>
          <p className='TextoRodape'>
            © 2022 RB1. Todos os direitos reservados. Desenvolvido por INETEP
          </p>
          <div className='info'>
            <span className='TextoRodape2'> +55 (21) 2106-1255</span>
            <span className='TextoRodape2'><i className=" pi pi-envelope" ></i> rb1@rb1.com.br</span>
          </div>
        </div>
      </footer>
    </div>

  )
}
// 📞