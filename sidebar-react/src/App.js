import './App.css';
import Sidebar from './components/Sidebar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Analytics from './pages/Analytics';
import Comment from './pages/Comment';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Login from './pages/Login';
import Home from "./pages/Home";

function App() {
  return (
    <div>
        <BrowserRouter>
          <Sidebar>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/comment" element={<Comment />} />
              <Route path="/product" element={<Product />} />
              <Route path="/productlist" element={<ProductList />} />
            </Routes>
          </Sidebar>
          </BrowserRouter>
    </div>
  );
}

export default App;
