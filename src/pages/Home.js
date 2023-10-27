import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import {getdata} from "../service/service"

export default function Home() {

  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
    getdata().then((res) => setServiceData(res.data))
  },[]);

  return (
    <div>


      <Outlet />
    </div>
  )
}
