
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "../common/Navbar/navbar";
import { Footer } from "../common/Footer/footer";
import { About } from "../features/About/about";
import { Contact } from "../features/Contact/contact";
import { Gallery } from "../features/Gallery/gallery";
import Home from "../features/Home/home";
const LazyHome = lazy(() => import('../features/Home/home'));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Strona-Główna" element={<Home />} />
        <Route path="*" element={<Suspense fallback='Loading...'> <LazyHome /></Suspense>} />
        <Route path="/O-Nas" element={<Suspense fallback='Loading...'> <About /></Suspense>} />
        <Route path="/Kontakt" element={<Contact />} />
        <Route path="/Galeria" element={<Gallery />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
