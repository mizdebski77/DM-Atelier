import { BrowserRouter } from "react-router-dom";
import { Navbar } from "../common/Navbar/navbar";
import { Home } from "../features/Home/home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
    </BrowserRouter>
  );
}

export default App;
