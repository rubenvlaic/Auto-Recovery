import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Servicii from "./routes/Servicii";
import Despre from "./routes/Despre";
import Contact from "./routes/Contact";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicii" element={<Servicii />} />
        <Route path="/despre" element={<Despre />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
