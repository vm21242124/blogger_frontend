import React, { useEffect, useState } from 'react'

import "./Auth.scss"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Logincmp } from '../../Componenets/Logincmp'
import { Registercmp } from '../../Componenets/Registercmp'
const AuthenticationPage = () => {
  const [page,setPage]=useState("login")
  return (
    <div className="authpage">
        <div className="authbox">
            <div className="authnav">
              <span onClick={()=>setPage("login")}>Login</span>
              <span onClick={()=>setPage("register")}>Register</span>
            </div>
            <div className="cmp">

            {page==="login"?<Logincmp/>:<Registercmp
            />}
            </div>
        </div>
    </div>
  )
}



export default AuthenticationPage