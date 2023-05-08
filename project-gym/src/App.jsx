

import { useState ,useEffect,useRef } from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Training from "./Pages/Training/Training";
import Pricing from "./Pages/Pricing/Pricing";
import Login from "./Pages/Login/Login";
import TrainerSection from "./Pages/TrainerSection/TrainerSection";
import Registration from "./Pages/Registration/Registration";
import Home from "./Pages/Home/Home";
import Team from "./Pages/Team/";
import PrivateRoutes from './PrivateRoutes';
import { authAtom } from './Pages/Login/Atom';
import { useRecoilState } from 'recoil';





function App() {

//   const [auth , setAth] = useRecoilState(authAtom)
//   const navigate = useNavigate();
//   const isFirstRender = useRef(true)
 
//   useEffect(() => {
//    if (isFirstRender.current) {
//      const authFromLocal = JSON.parse(localStorage.getItem('auth')) ||[];
//      setAth(authFromLocal);
//    } else {
//      localStorage.setItem('auth', JSON.stringify(auth));
//      if (auth.isloggedIn) {
//        navigate('/home');
//      } else {
//        navigate('/registration');
//      }
//    }
//    isFirstRender.current = false;
//  }, [auth]);

  

  return (

    <BrowserRouter>
     <AuthHandler/>
      <Routes>
        <Route path="/" element={<PrivateRoutes Component={Login}/>} />
        <Route path="/aboutus" element={<PrivateRoutes Component={AboutUs}/>} />
        <Route path="/training" element={<PrivateRoutes Component={Training}/>} />
        <Route path="/pricing" element={<PrivateRoutes Component={Pricing}/>} />
        <Route path="/trainer" element={<PrivateRoutes Component={TrainerSection}/>} />
        <Route path="/home" element={<PrivateRoutes Component={Home}/>} />
        <Route path="/team" element={<PrivateRoutes Component={Team}/>} />

        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}
 
function AuthHandler() {
  const [auth, setAuth] = useRecoilState(authAtom);
  const navigate = useNavigate();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      const authFromLocal = JSON.parse(localStorage.getItem('auth')) || [];
      setAuth(authFromLocal);
    } else {
      localStorage.setItem('auth', JSON.stringify(auth));
      if (auth.isloggedIn) {
        navigate('/home');
      }
    }
    isFirstRender.current = false;
  }, [auth]);

  
}









export default App;
