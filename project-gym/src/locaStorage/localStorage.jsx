import { useEffect } from "react";
import { atom  } from "recoil";

 let usersDataFromLocal=''

 if (JSON.parse(localStorage.getItem('users'))){
    usersDataFromLocal=JSON.parse(localStorage.getItem('users'))
 }

 export  const userData=atom({
    key:'userData',
    default:[{fname:'rohan',lname:'kumar',email:'rohan@gmail.com' , password:'rohan123'},...usersDataFromLocal]
})


export const showHome=atom({
   key:'showHome',
   default:false
})
