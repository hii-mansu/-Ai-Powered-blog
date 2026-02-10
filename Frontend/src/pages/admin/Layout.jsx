import React, { useEffect } from 'react'
import SideBar from '../../components/admin/global/SideBar'
import NavBar from '../../components/admin/global/NavBar'
import { Outlet } from 'react-router-dom'
import axios from 'axios'

const Layout = () => {

<<<<<<< HEAD
  const fetchSiteAdminSettings = async()=>{
=======
/*  const fetchSiteAdminSettings = async()=>{
>>>>>>> main
    try {
      const {data} = await axios.get("/api/admin/siteadminsettings");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchSiteAdminSettings();
<<<<<<< HEAD
  },[]);
=======
  },[]);*/
>>>>>>> main

  return (
    <div className='w-full h-screen md:flex md:flex-row'>
        <SideBar />
        <div className='flex flex-col w-full h-full'>
          <NavBar />
          <Outlet />
        </div>
    </div>
  )
}

export default Layout