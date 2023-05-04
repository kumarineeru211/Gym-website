


import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Training from "./Pages/Training/Training";
import Pricing from "./Pages/Pricing/Pricing";
import Login from "./Pages/Login/Login";
import TrainerSection from "./Pages/TrainerSection/TrainerSection";
import Registration from "./Pages/Registration/Registration";
import Home from "./Pages/Home/Home";
import Team from "./Pages/Team/";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/training" element={<Training />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/trainer" element={<TrainerSection />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/home" element={<Home />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
