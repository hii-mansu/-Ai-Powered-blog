import React from 'react'
import SideBar from '../../components/admin/global/SideBar'
import NavBar from '../../components/admin/global/NavBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
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