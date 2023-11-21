import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import { useSelector } from "react-redux"
import { useEffect } from "react"

function App() {
  const user =useSelector(state=>state.user)
  const nav=useNavigate()
  useEffect(()=>{
    if(user===null){
      nav("/auth")
    }
  },[user])
  return(
  <>
  <HomePage/>
  
  </>
  )

}


export default App
