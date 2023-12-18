import React, { useState, useEffect } from 'react'
// import { useRouter } from 'next/navigation'
import { Outlet } from 'react-router-dom'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
// import l from '../service/menuMobile'
import axios from "axios"
import './Home.css'
import 'primeicons/primeicons.css';

export default function Home() {
  const [displayButton, setDisplayButton] = useState('none')
  const [serviceData, setServiceData] = useState([{}]);
  const [rowClick, setRowClick] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [getDados, setGetDados] = useState(true)
  const [rowData, setRowData] = useState([])
  const [columnDefs, setColumnDefs] = useState([
    { field: 'name', headerName: 'Nome' },
    // Using dot notation to access nested property
    { field: 'slug', headerName: 'Slug' },
  ]);
  // const router = useRouter();

  const apiUrl = 'https://blue-enchanting-macaw.cyclic.cloud/';
  //const apiUrl = 'http://localhost:3010/';


  useEffect(() => {
    console.log('apiUrl: ' + apiUrl);
    getUsers();
  }, []);

  const getUsers = async () => {
    fetch(`${apiUrl}getUsers`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          console.log(data)
          setServiceData(data);
          // setRowData(data);
          // console.log('Row data ', data, 'rowdata', rowData);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

  }

  const updateUsers = async () => {
    showLoading();
    await fetch(`${apiUrl}update`)
      .then((data) => {
        // window.location.reload(true);
        console.log('data em update', data);
        getUsers();
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    hideLoading();
  }

  const deleteUser = async (data) => {
    showLoading();
    await axios.delete(`${apiUrl}delete/${data.id}`)
      .then(res => {
        console.log(res)
      })
      .catch(er => console.log);
      hideLoading();
  }

  const deletarVariosUsuarios = async () => {
    const confirma = window.confirm("Deseja apagar?");
    if (confirma) {
      showLoading();
      selectedProducts.forEach(element => {
        console.log('papai', element)
        deleteUser(element)
      });
      await getUsers()
      hideLoading();
      // window.location.href = "/"
    }
  }

  const Seleciona = (e) => {
    setSelectedProducts(e.value)
    setDisplayButton(e.value.length === 0 ? 'none' : 'block')

  }

  const hideLoading = () => {
    document.getElementById('load').style.display = 'none';
  }

  const showLoading = () => {
    document.getElementById('load').style.display = 'flex';
  }

  const cabecalho2 = () => {
    return (
      <><>
        <div>
          <label id='titulo'>Email</label>
          <Button label='Atualizar Dados' className='botao-atualizar' onClick={updateUsers}>
            {/* <i className="pi pi-spin pi-undo"
              style={{ fontSize: '1rem' }}></i> */}
          </Button>
          {/* <label id='titulo'>Email</label>
          <Button label='Atualizar Dados' className='botao-atualizar' onClick={showLoading}></Button> */}
        </div>
      </></>
    )
  }

  const cabecalho = () => {
    return (
      <>
        <div className='box-botão'>
          <label>Nome</label>
          <Button label=""
            onClick={deletarVariosUsuarios} className="botão-remover"
            style={{ display: displayButton }}>
            <i className=" pi pi-trash" style={{ fontSize: '1.2rem' }} ></i>
          </Button>
        </div>
      </>
    )
  }
  return (
    <>
      <div className='content contentBDTable'>
        <div class="loader" id="load"></div>

        <DataTable value={serviceData} scrollable scrollHeight="70vh" className='tabela'
          dataKey="id"
          selectionMode={rowClick ? null : 'checkbox'}
          selection={selectedProducts}
          onSelectionChange={Seleciona}
          tableStyle={{ Width: '50rem', height: '63.6vh' }}>

          <Column selectionMode="multiple" headerStyle={{ width: '5.3rem' }}></Column>
          <Column field="name" header={cabecalho}></Column>
          <Column field="slug" header={cabecalho2}></Column>

        </DataTable>


        <Outlet />
      </div>
    </>
  )
}
