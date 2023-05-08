import React , {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { loginStat } from './Pages/Login/Atom';

 export default function ProtectedRoutes({Component}){
  const isLoggedin = useRecoilValue(loginStat)
  const navigate = useNavigate();

  useEffect (()=>{
    if(isLoggedin===false){
      navigate('/registration')
    }
  })
  return (
    <div>
      <Component/>
    </div>
  )
}
