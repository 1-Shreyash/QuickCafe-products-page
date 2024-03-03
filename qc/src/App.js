import './App.css';
import { Footer } from './Components/Footer';
import { Navbar } from './Components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from './Components/Dashboard';
import { CartState } from './Contexts/Cart/CartState';


function App() {
  return (
  <>
    <CartState>
      <BrowserRouter>
        <Navbar/>
        <Dashboard/>
        <Routes>
          <Route path="/" element={Dashboard}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartState>
  </>
  );
}

export default App;
