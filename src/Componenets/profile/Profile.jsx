import React, { useEffect, useState } from 'react'
import './Profile.scss'
import axios from 'axios'

const Profile = () => {
  const [user,setUser]=useState([])
  useEffect(()=>{
    axios.get("/user/1").then((res)=>setUser(res.data)).catch(e=>console.log(e.message))
  },[])
  return (
    <div className="profile">
      <div className="user">
        <div className="profilephoto">
          <img src={`http://localhost:8080/img/${user.profilepic}`} alt="profilephoto" />
          <span>{user.name}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolorem molestiae commodi id molestias sunt!</p>
        </div>
        <div className="userfollowers">
          <h2>4</h2>
          <span>post</span>
        </div>
        <div className="userfollowers">
          <h2>488</h2>
          <span>followers</span>
        </div>
        <div className="userfollowers">
          <h2>488</h2>
          <span>followings</span>
        </div>
  
      </div>
      
    </div>
  )
}

export default Profile