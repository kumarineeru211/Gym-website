import React, { useState } from "react";
import { useRecoilValue, useRecoilState ,useSetRecoilState} from "recoil";
import LoginCss from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { showHome, userData } from "../../locaStorage/localStorage";
import Home from "../Home/Home";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { authAtom } from "./Atom";
function Login() {
  const atomvalue = useRecoilValue(userData);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPass, setEnteredPass] = useState("");
  const [homeVis, setHomeVis] = useRecoilState(showHome);
  const [test, setTest] = useState("");
  const setAuth = useSetRecoilState(authAtom)
  const navigate = useNavigate()

  function CheckDataFromLocal() {
    const dataEnteredIsValid = atomvalue.find(
      (x) => x.email === enteredEmail && x.password === enteredPass
    );
    if (dataEnteredIsValid) {
      setHomeVis(!homeVis);
      setTest(dataEnteredIsValid);
      alert("login sucessful");

      setAuth((auth)=>{
        return {
          isLoggedIn:true
        }
      })
      navigate('/home')
    } else {
      alert("Kindly check your email and password ");
    }
  }

  return homeVis ? (
    <Home />
  ) : (
    <div className={LoginCss.mainDiv}>
      <div className={LoginCss.Div}>
        <TextField
          sx={{ width: "27ch", backgroundColor: "rgb(122, 128, 125)" }}
          id="outlined-basic"
          label="Enter your Email"
          variant="filled"
          onChange={(e) => {
            setEnteredEmail(e.target.value);
          }}
        />
        <TextField
          type="password"
          sx={{ width: "27ch", backgroundColor: "rgb(122, 128, 125)" }}
          id="outlined-basic"
          label="Enter your password"
          variant="filled"
          onChange={(e) => {
            setEnteredPass(e.target.value);
          }}
        />

        {homeVis ? (
          ""
        ) : (
          <Button
            color="success"
            variant="contained"
            sx={{ width: "10ch", marginLeft: "55px" ,borderRadius:6, borderBottomRightRadius:0}}
            onClick={CheckDataFromLocal}
          >
            Login
          </Button>
        )}

        <Link to={"/registration"}>
          <Button
            onClick={() => {
              alert("Enter Details to Become a part of our gym family");
            }}
            variant="contained"
            color="success"
            sx={{ width: "28ch" ,borderRadius:6, borderTopLeftRadius:0 }}
          >
            Don't have an account SIgnup
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
