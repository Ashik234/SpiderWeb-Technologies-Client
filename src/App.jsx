import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserRoutes from './routes/userRoutes';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<UserRoutes/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App