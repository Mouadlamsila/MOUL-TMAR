import React from "react";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Login from "./Login";
import View from "./View";
import Update from "./Update";
import Register from "./Register";
import Home from "./Home";
import Pass from "./Pass";
import TableDates from "./TableDates";

import UpdateDate from "./UpdateDate";
export default function App() {
    return (
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/siginup" element={<Register/>}/>
          <Route path="/View/:id" element={<View />} />
          <Route path="/Update/:id" element={<Update/>}/>
          <Route path="/ForgetPass" element={<Pass/>}/>
          <Route path="/Table" element={<TableDates/>}/>
          <Route path="/UpdateDate/:ID" element={<UpdateDate/>}/>

        </Routes>
        </BrowserRouter>
    );
  }
  