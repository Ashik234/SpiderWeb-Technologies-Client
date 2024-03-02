import React from 'react'
import { Outlet } from "react-router-dom";
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-violet-500">
      <NavBar />
      <div className="flex flex-grow">
        <Outlet />
        <div className="fixed h-full">
          <SideBar />
        </div>
      </div>
    </div>
  )
}

export default Layout;
