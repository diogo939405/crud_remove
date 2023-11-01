import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Getdata } from "../service/service"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './Home.css'

export default function Home() {

  const [serviceData, setServiceData] = useState([{ }]);
  const [rowClick, setRowClick] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState(null);

  // useEffect(() => {
  //   Getdata().then((data) =>  setServiceData(data));
  // }, []);
  useEffect(() => {
    // Define the URL of the API you want to fetch data from
    const apiUrl = 'https://blue-enchanting-macaw.cyclic.cloud/diogo';

    // Fetch the data using the fetch API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Update the data state with the fetched data
        console.log(data)
        setServiceData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  return (
    <div className='content'>
      <DataTable value={serviceData} scrollable scrollHeight="70vh" className='tabela' 
        dataKey="id"
        selectionMode={rowClick ? null : 'checkbox'}
        selection={selectedProducts}
        onSelectionChange={(e) => setSelectedProducts(e.value)}
        tableStyle={{ Width: '50rem' }}>

        <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
        <Column field="name" header="Nome"></Column>
        <Column field="slug" header="Email"></Column> 

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