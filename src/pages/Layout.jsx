import React from 'react'
import { Outlet } from "react-router-dom";
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

function Layout() {
  return (
    <div className="flex flex-col " style={{
      background: "linear-gradient(to bottom, indigo, black)",
    }}>
    <NavBar />
    <div className='flex gap-x-4'>
      <SideBar/>
      <div className='w-full'>
        <Outlet/>
      </div>
    </div>
  </div>
  )
}

export default Layout;
