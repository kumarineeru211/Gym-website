


import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUS";


import Home from "./Pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/aboutus" element={<AboutUs />} />
        
       
        <Route path="/" element={<Home />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
