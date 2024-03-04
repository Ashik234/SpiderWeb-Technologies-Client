import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import { motion } from "framer-motion";

function Layout() {
  return (
    <div
      className="flex flex-col h-100vh w-full"
      style={{
        background: 'linear-gradient(to bottom, indigo, black)',
      }}
    >
      <NavBar />
      <div className="flex">
        <SideBar />
        <motion.div 
         animate={{ opacity: 1, y: 0 }}
         initial={{ opacity: 0, y: 0 }}
         transition={{ ease: "easeIn", duration: 1 }}
        className="w-full ml-2">
          <Outlet />
        </motion.div>
      </div>
    </div>
  );
}

export default Layout;
