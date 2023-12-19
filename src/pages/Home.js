import React, { useState, useEffect,useRef } from 'react'
// import { useRouter } from 'next/navigation'
import { Outlet } from 'react-router-dom'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';

// import l from '../service/menuMobile'
import axios from "axios"
import './Home.css'
import 'primeicons/primeicons.css';

export default function Home() {
  const [displayButton, setDisplayButton] = useState('none')
  const [serviceData, setServiceData] = useState([{}]);
  const [rowClick, setRowClick] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState(null);

  const [columnDefs, setColumnDefs] = useState([
    { field: 'name', headerName: 'Nome' },
    // Using dot notation to access nested property
    { field: 'slug', headerName: 'Slug' },
  ]);
  // const router = useRouter();
  var dataUser = {};

  const apiUrl = 'https://blue-enchanting-macaw.cyclic.cloud/';
  //const apiUrl = 'http://localhost:3010/';

  const confirm1 = () => {
    confirmDialog({
      message: 'Certeza que desejar apaga os usúarios selecionados?',
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel:'Não',
      accept,
      reject
    });
  };

  const accept = async () => {
    showLoading();
    await axios.delete(`${apiUrl}delete/${dataUser.id}`)
      .then(res => {
        console.log(res)
      })
      window.location.reload(true);

    // toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
  }

  const reject = () => {
    // toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
  }

  const toast = useRef(null);

  const toaste = () =>{
    toast.current.show({ severity: 'warn',
     summary: 'Atenção',
      detail: 'Caso a tabela não tenha carregado, por favor clica no botão atualizar dados e aguarda o carregamento', 
      life: 3000 });
  }

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
        }else{
          toaste();
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
        console.log('data em update', data);
        getUsers();
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    hideLoading();
  }

  const deleteUser = async (data) => {
    dataUser = data;
    confirm1()
    //  const confirma = window.confirm("Deseja apagar " + data.nome + "?");
    // if (confirma) {
    //   await axios.delete(`${apiUrl}delete/${data.id}`)
    //     .then(res => {
    //       console.log(res)
    //     })
    //     .catch(er => console.log);
    // }
  }

  const deletarVariosUsuarios = async () => {
    console.log('Hello, World!')
    await selectedProducts.forEach(async element => {
      console.log('papai', element)
      await deleteUser(element)
    });
    await getUsers()
    hideLoading();
 
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
          </Button>
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
    <Toast ref={toast} />
      <ConfirmDialog />
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
