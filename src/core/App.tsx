import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "../common/Navbar/navbar";
import { Home } from "../features/Home/home";
import { Footer } from "../common/Footer/footer";
import { About } from "../features/About/about";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Strona-Główna" element={<Home />} />
        <Route path={"*"} element={<Home />} />
        <Route path="/O-Nas" element={<About />} />
        <Route path="/Kontakt" element={<About />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
