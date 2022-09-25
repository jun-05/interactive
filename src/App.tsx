import React from "react";
import ScrollFixed from "./pages/ScrollFixed";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

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
