import React from "react";
import { Route, Routes } from "react-router-dom";
import DashBoard from "../pages/DashBoard";
import Layout from "../pages/Layout";
import AddEvent from "../pages/AddEvent";

function userRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<DashBoard />} />
        <Route exact path="/add" element={<AddEvent />} />
      </Route>
    </Routes>
  );
}

export default userRoutes;
