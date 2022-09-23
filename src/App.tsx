import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Parallax } from "./pages/Parallax";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Parallax" element={<Parallax />} />
        {/*
        <Route path="/" element={} />
        <Route element={<NotFound />} />
         */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
