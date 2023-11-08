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
                    <a href="#">PRINCIPAL</a>
                </li>
                <span class="nav-link-detail">|</span>
                <li class="nav-link services">
                    <a href="#">SEGURANÇA
                        <span class="material-icons dropdown-icon">
                            arrow_drop_down
                        </span>
                    </a>
                    <ul class="drop-down">
                        <li>SEGURANÇA CIBERNETICA</li>
                        <li>SEGURANÇA PREDIAL</li>
                    </ul>
                </li>
                <span class="nav-link-detail">|</span>
                <li class="nav-link services">
                    <a href="#">CONTROLE DE ACESSO
                        <span class="material-icons dropdown-icon">
                            arrow_drop_down
                        </span>
                    </a>
                    <ul class="drop-down">
                        <li>ADICIONAR</li>
                        <li>REMOVER</li>

                    </ul>
                </li>
                <span class="nav-link-detail">|</span>
                <li class="nav-link">
                    <a href="#">LGPD</a>
                </li>
                <span class="nav-link-detail">|</span>
                <li class="nav-link">
                    <a href="#">ANIVERSARIANTES</a>
                </li>
                <span class="nav-link-detail">|</span>
                <li class="nav-link">
                    <a href="#">SAIR</a>
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
            <span className='TextoRodape2'>+55 (21) 2106-1255</span>
            <span className='TextoRodape2'><i className=" pi pi-envelope" ></i> rb1@rb1.com.br</span>
          </div>
        </div>
      </footer>
    </div>

  )
}
// 📞