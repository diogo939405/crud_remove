import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import axios from "axios"
import './Home.css'
import 'primeicons/primeicons.css';

export default function Home() {
  const [displayButton, setDisplayButton] = useState('none')
  const [serviceData, setServiceData] = useState([{}]);
  const [rowClick, setRowClick] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState(null);

  const apiUrl = 'https://blue-enchanting-macaw.cyclic.cloud/';
  useEffect(() => {
    fetch(`${apiUrl}/getUsers`)
      .then((response) => response.json())
      .then((data) => {

        console.log(data)
        setServiceData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  // const botoes = (rowdata) => {
  //   return <Button onClick={() => deletarUnicoUsuario(rowdata)} icon="pi pi-times" severity="danger" aria-label="Cancel"></Button>
  
  // }
  // const deletarUnicoUsuario = (data) => {
  //   const confirma = window.confirm("Deseja apagar?");
  //   if (confirma) {
  //     deleteUser(data)
  //   }
  // }

  const deleteUser = (data) => {
    axios.delete(`${apiUrl}/delete/${data.id}`)
      .then(res => {
        window.location.reload()
      })
  }

  const deletarVariosUsuarios = (ee) => {
    const confirma = window.confirm("Deseja apagar?");
    if (confirma) {
      selectedProducts.forEach(element => {
        console.log('papai', element)
        deleteUser(element)

      });
    }
  }

  const Seleciona = (e) => {
    setSelectedProducts(e.value)
    setDisplayButton(e.value.length === 0 ? 'none' : 'block')
  }
  return (
    
    <div className='content contentBDTable'>

      <Button label="Excluir usúarios selecionados" severity="danger" rounded onClick={deletarVariosUsuarios} className="botão-remover" style={{ display: displayButton }}  >

      </Button>

      <DataTable value={serviceData} scrollable scrollHeight="70vh" className='tabela'
        dataKey="id"
        selectionMode={rowClick ? null : 'checkbox'}
        selection={selectedProducts}
        onSelectionChange={Seleciona}
        tableStyle={{ Width: '50rem',height:'73vh' }}>

        <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
        <Column  field="name" header="Nome"></Column>
        <Column  field="slug" header="Email"></Column>
        {/* <Column header="Ações" body={botoes} style={{ minWidth: '2rem' }}  ></Column> */}

      </DataTable>
      <Outlet />
    </div>
  )
}

// margin-top: -450px;
// width: 50rem;
// margin-left: 200px;
// border-radius: 100px;
// }