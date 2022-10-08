import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Routes/Home";
import Recommendation from "./Routes/Recommendation";
import List from "./Routes/List";
import Stores from "./Routes/Stores";
import Detail from "./Routes/Detail";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/stores" element={<Stores />}/>
        <Route path="/drinks/detail" element={<Detail />}/>
        <Route path="/drinks/list" element={<List />} /> 
        <Route path="/drinks/recommendation" element={<Recommendation />} /> 
        <Route path="/" element={<Home />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
