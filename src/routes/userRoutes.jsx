import React from 'react'
import { Route, Routes } from "react-router-dom";
import DashBoard from '../pages/DashBoard';
import Layout from '../pages/Layout';

function userRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<DashBoard/>}/>

</Route>
    </Routes>
  )
}

export default userRoutes