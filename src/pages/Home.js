import React, { useState, useEffect } from 'react'
// import { useRouter } from 'next/navigation'
import { Outlet } from 'react-router-dom'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import axios from "axios"
import './Home.css'
import 'primeicons/primeicons.css';

// import { library, icon } from '@fortawesome/fontawesome-svg-core'
// import { faCamera } from '@fortawesome/free-solid-svg-icons'

// library.add(faCamera)

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


  // useEffect(() => {
  //   console.log('chamando update: ')
  //   console.log(`URL DA ATUALIZAÇÃO ${apiUrl}update`)
  //   fetch(`${apiUrl}update`)
  //     .then((data) => {
  //       // window.location.reload(true);
  //       console.log('data em update', data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, [getDados]);


  const updateUsers = async () => {
    await fetch(`${apiUrl}update`)
      .then((data) => {
        // window.location.reload(true);
        console.log('data em update', data);
        getUsers();
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }



  // const botoes = (rowdata) => {
  //   return <Button onClick={() => deletarUnicoUsuario(rowdata)} icon="pi pi-times" severity="danger" aria-label="Cancel"></Button>

  // }
  // const deletarUnicoUsuario = (data) => {
  //   const confirma = window.confirm("Deseja apagar?");
  //   if (confirma) {
  //     deleteUser(data)
  //   }
  // }

  const deleteUser = async (data) => {
    await axios.delete(`${apiUrl}delete/${data.id}`)
      .then(res => {
        console.log(res)
        //  window.location.href = "/"
        // window.location.reload(true);
      })
      .catch(er => console.log);
    window.location.href = "/"
    //  router.refresh();
  }

  const deletarVariosUsuarios = () => {
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

  const cabecalho2 = () => {
    return (
      <><>
        <div>
          <label id='titulo'>Email</label>
          <Button label='Atualizar Dados' className='botao-atualizar' onClick={updateUsers}>
            <i className="pi pi-spin pi-undo"
              style={{ fontSize: '1rem' }}></i>
          </Button>
        </div>
      </></>
    )
  }

  const cabecalho = () => {
    return (
      <><>
        <div className='box-botão'>
          <label>Nome</label>
          <Button label=""
            onClick={deletarVariosUsuarios} className="botão-remover"
            style={{ display: displayButton }}>
            <i className=" pi pi-trash" style={{ fontSize: '1.2rem' }} ></i>
          </Button>
        </div>
      </></>

    )
  }
  return (
    <>
      {/* <div>fddfhdfhd
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
        />
      </div> */}
      <div className='content contentBDTable'>

        {/* <Button label="Excluir usúarios selecionados" severity="danger" rounded onClick={deletarVariosUsuarios} className="botão-remover" style={{ display: displayButton }}>
      </Button> */}

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

// margin-top: -450px;
// width: 50rem;
// margin-left: 200px;
// border-radius: 100px;
// }