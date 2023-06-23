import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Create from "./components/Create";
import Update from "./components/Update";
import Read from "./components/Read";
import "bootstrap/dist/css/bootstrap.min.css";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <BrowserRouter>
      <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add" element={<Create />}></Route>
          <Route path="/update/:id" element={<Update />}></Route>
          <Route path="/read/:id" element={<Read />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
