import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Parallax } from "./pages/Parallax";
import ScrollFixed from "./pages/ScrollFixed";
import { CdPlayer } from "./pages/CdPlayer";
import { ColorProvider } from "./context/color";

function App() {
  return (
    <ColorProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/ScrollFixed" element={<ScrollFixed />} />
          <Route path="/Parallax" element={<Parallax />} />
          <Route path="/cdPlyaer" element={<CdPlayer />} />
          {/*
        <Route path="/" element={} />
        <Route element={<NotFound />} />
         */}
        </Routes>
      </BrowserRouter>
    </ColorProvider>
  );
}

export default App;
