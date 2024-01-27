// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./page/Mainpage";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <div>
     
          <Routes>
            <Route path="/" element={<Mainpage /*state = {state}*/ />} />
            
          </Routes>
         
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
