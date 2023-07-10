import { BrowserRouter } from "react-router-dom";
import { Navbar } from "../common/Navbar/navbar";
import { Home } from "../features/Home/home";
import { Footer } from "../common/Footer/footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
