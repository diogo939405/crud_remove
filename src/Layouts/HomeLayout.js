import React from 'react'
import { Outlet } from 'react-router-dom'
import '../menu/menu'
import './HomeLayout.css'
import '../service/link.service'
import '../service/menuMobile'
import { Cartilhas, Manuais, Adicionar, Lgpd, Anirvesariantes, Controle, Principal } from '../service/link.service'
<link href="https://fonts.cdnfonts.com/css/ropa-sans-2" rel="stylesheet"></link>



let cartilha = Cartilhas
let manuais = Manuais
let adicionar = Adicionar
let lgpd = Lgpd
let aniversariantes = Anirvesariantes
let controle = Controle
let principal = Principal





export default function HomeLayout() {
  return (
    <div className='corpo' >
      <header className='cabecalho'>
        <img className='foto' src="https://rb1-condominio.com.br/extranet/wp-content/uploads/2023/08/Logo_top1-1-e1653228986853-meno.png" width="107px" height="61px" alt='cabeçalho'></img>
        <p href='#' className='toggle-button' >
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          </p> 
        <div class="container">
          <nav class="navbar">
            <ul class="nav-links">
              <li class="nav-link">
                <div className='drop-down-catch'>
                  <a onClick={principal} >PRINCIPAL</a>
                </div>
              </li>
              <span class="nav-link-detail">|</span>

              <li class="nav-link">
                <div className='drop-down-catch'>
                  <a onClick={aniversariantes}>ANIVERSARIANTES</a>
                </div>
              </li>
              <span class="nav-link-detail">|</span>

              <li class="nav-link">
                <div className='drop-down-catch'>
                  <a onClick={lgpd}>LGPD</a>
                </div>
              </li>
              <span class="nav-link-detail">|</span>


              <li class="nav-link services">
                <div className='drop-down-catch'>
                  <a href="https://rb1-condominio.com.br/extranet/seguranca/">SEGURANÇA +
                  </a>
                  <ul class="drop-down">
                    <li onClick={cartilha}>CARTILHAS</li>
                    <li onClick={manuais}>MANUAIS</li>
                  </ul>
                </div>
              </li>
              <span class="nav-link-detail">|</span>
              <li class="nav-link services">
                <div className='drop-down-catch'>
                  <a onClick={controle}>CONTROLE DE ACESSO +
                  </a>
                  <ul class="drop-down">
                    <li onClick={adicionar}>ADICIONAR</li>
                    <li>REMOVER</li>

                  </ul>
                </div>
              </li>

              <span class="nav-link-detail">|</span>



              <li class="nav-link">
                <div className='drop-down-catch'>
                  <a>SAIR</a>
                </div>
              </li>

            </ul>
          </nav>
        </div>
      </header>
      <body>
      </body>
      <Outlet />
      <footer className='footer'>
        <div>
          <img className='fotoFooter' src="https://rb1-condominio.com.br/extranet/wp-content/uploads/2023/08/Logo_top1-1-e1653228986853-meno.png" width="53px" height="30px" alt='cabeçalho'></img>
          <p className='TextoRodape'>
            © 2022 RB1. Todos os direitos reservados. Desenvolvido por INETEP
          </p>
          <div className='info'>
            <p className='TextoRodape2'> +55 (21) 2106-1255</p>
            <p className='TextoRodape2'><i className=" pi pi-envelope" style={{ fontSize: '0.3rem' }} ></i> rb1@rb1.com.br</p>
          </div>
        </div>
      </footer>
    </div>

  )
}
// 📞