import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { getdata } from "../service/service"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function Home() {

  const [serviceData, setServiceData] = useState([]);
  const [rowClick, setRowClick] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState(null);
  useEffect(() => {
    getdata().then((res) => {setServiceData(res.data);console.log('efefee',res.data)})
  }, []);

 
  return (
    <div>
      <DataTable value={serviceData} scrollable scrollHeight="70vh"
        dataKey="id"
        selectionMode={rowClick ? null : 'checkbox'}
        selection={selectedProducts}
        onSelectionChange={(e) => setSelectedProducts(e.value)}
        tableStyle={{ minWidth: '50rem' }}>

        <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
        <Column field="name" header="Nome"></Column>
        {/* <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column> */}
      </DataTable>
      <Outlet />
    </div>
  )
}
