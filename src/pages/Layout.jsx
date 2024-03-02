import React from 'react'
import { Outlet } from "react-router-dom";
import NavBar from '../components/NavBar';

function Layout() {
  return (
    <div className="flex min-h-screen bg-violet-500">
      {/* <div className="fixed h-full">
        <SideBar />
      </div> */}
      <div className="flex flex-col flex-grow">
        <NavBar />
        <div className="flex-grow mt-4">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout