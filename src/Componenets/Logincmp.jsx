import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setuser } from "../ReduxSetup/UserSlice";


export const Logincmp=()=>{
    const nav=useNavigate();
    const [user,setUser]=useState([])
    const [email,setEmail]=useState("")
    const [password,setPass]=useState("")
    const dispatch=useDispatch()
    const handleLogin=(e)=>{
      e.preventDefault();
      axios.post("/auth/login",{email,password}).then((res)=>{
        if(res.status===200){
          nav("/")
       
          dispatch(setuser(res.data))
        
        }
      }).catch((e)=>console.log(e.message))
      // console.log(email,password);
    }
  
    return(
      <div className="logincmp">
        <span className='lbl' >Enter Email</span>
        <input className='inp' type="text" onChange={(e)=>setEmail(e.target.value)}/>
        <span className='lbl'>Enter Password</span>
        <input className='inp' type="password" onChange={(e)=>setPass(e.target.value)}/>
        <button className="submitbtn" onClick={handleLogin}>
          LOGIN
        </button>
        <span className='lbl' style={{marginTop:"10px",cursor:"pointer",fontSize:"15px"}}> Don't have account ? Register Now</span>
      </div>
    )
  }