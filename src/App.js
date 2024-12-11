import React from "react";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main";
import About from "./About";
import Login from "./Login";
import View from "./View";
import Update from "./Update";

export default function App() {
    return (
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/Home" element={<Main/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/siginup" element={<Login/>}/>
          <Route path="/View/:id" element={<View />} />
          <Route path="/Update/:id" element={<Update/>}/>

        </Routes>
        </BrowserRouter>
    );
  }
  