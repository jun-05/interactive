import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Parallax from "./pages/Parallax";
import ScrollFixed from "./pages/ScrollFixed";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ScrollFixed" element={<ScrollFixed />} />
        {/*
        <Route path="/" element={} />
        <Route element={<NotFound />} />
         */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
