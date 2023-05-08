import { useEffect } from "react";
import { atom  } from "recoil";

 let usersDataFromLocal=''

 if (JSON.parse(localStorage.getItem('users'))){
    usersDataFromLocal=JSON.parse(localStorage.getItem('users'))
 }

 export  const userData=atom({
    key:'userData',
    default:[]
})


export const showHome=atom({
   key:'showHome',
   default:false
})
