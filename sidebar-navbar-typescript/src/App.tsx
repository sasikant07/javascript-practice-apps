import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { About, Configuration, History, Home, Order, Overview, Profile, Revenue, Users } from "./pages/Overview";

function App() {
  return (
    <BrowserRouter>
        <div className="header">
          <Navbar />
          <Sidebar />
        </div>
        <Routes>

          {/* Navbar Routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />

           {/* Sidebar Routes */}
           <Route path="/overview" element={<Overview />} />
           <Route path="/overview/users" element={<Users />} />
           <Route path="/overview/revenue" element={<Revenue />} />
           <Route path="/order" element={<Order />} />
           <Route path="/history" element={<History />} />
           <Route path="/configuration" element={<Configuration />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
