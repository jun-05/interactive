import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Parallax } from "./pages/Parallax";
import ScrollFixed from "./pages/ScrollFixed";
import { ScrollFixedMove } from "./pages/ScrollFixedMove";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ScrollFixed" element={<ScrollFixed />} />
        <Route path="/ScrollFixedMove" element={<ScrollFixedMove />} />
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
