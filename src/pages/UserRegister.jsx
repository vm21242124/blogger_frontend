import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react"

const UserRegister = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [about, setAbout] = useState("");

    const Submit = (e) => {
        e.preventDefault();
        // axios.get("http://localhost:8080/user/all").then((res)=>console.log(res.data)).catch((e)=>console.log(e.message))
        axios.post("http://localhost:8080/user/create", { name, about, email, password: pass }).then((res) => {
            console.log(res.data);
            alert("user created")
        }).catch((e) => console.log(e))
    }
    return (
        <>
            <form >
                <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder="password" onChange={(e) => setPass(e.target.value)} />
                <input type="text" placeholder="about" onChange={(e) => setAbout(e.target.value)} />
                <button onClick={Submit}>submit</button>
            </form>
            <AllUser />

        </>
    )
}

const AllUser=()=>{
    const [user,setUsers]=useState([])
    useEffect(()=>{
           axios.get("/user/all").then((res)=>setUsers(res.data)).catch((e)=>console.log(e.message))
           console.log(user);
    },[setUsers])
    const deleteuser=(id)=>{
      axios.get(`http://localhost:8080/user/delete/${id}`).then(()=>alert("deleted successfull"))
         console.log(id);
    }
    return(
      <>
      {user.map((item,key)=>(
        <div className="user" key={key}>
          <span>{item.name}</span>
          <span>{item.email}</span>
          <span>{item.password}</span>
          <span>{item.id}</span>
          <button onClick={()=>deleteuser(item.id)}>delete</button>
        </div>
      ))}
      </>
    )
  }
export default UserRegister