import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Registercmp=()=>{
    const nav=useNavigate()
    const [name ,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [password,setPass]=useState("")
    const handleRegister=(e)=>{
      e.preventDefault();
      axios.post("/auth/register",{name,email,password,phone}).then((res)=>{
        if(res.status===200){
          nav("/")
          console.log(res.data);
        }
      }).catch((e)=>console.log(e.message))
    
    }
    return(
      <div className="logincmp">
        <span className='lbl'>Enter Your Name</span>
        <input className='inp' type="text" required={true} onChange={(e)=>setName(e.target.value)}/>
        <span className='lbl'>Enter Your Mobile No</span>
        <input className='inp' type="text" required={true} onChange={(e)=>setPhone(e.target.value)}/>
        <span className='lbl'>Enter Email</span>
        <input className='inp' type="email" required={true} onChange={(e)=>setEmail(e.target.value)}/>
        <span className='lbl' >Enter Password</span>
        <input className='inp' type="password" required={true} onChange={(e)=>setPass(e.target.value)}/>
        <button className="submitbtn" onClick={handleRegister}>
          REGISTER
        </button>
        <span className='lbl' style={{marginTop:"10px",cursor:"pointer",fontSize:"15px"}} > Already have account ? Login Now</span>
      </div>
    )
  }