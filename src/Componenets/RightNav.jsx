import React from 'react'
import { tempost, userdata } from '../Tempdata'

const RightNav = () => {
  return (
    <div className="right">
        <div className="userprofile">
            <img className="profilepic" src={userdata.profilepic}/>
            <span>{userdata.name}</span>
            <span className='followbtn'>switch</span>
        </div>
        <span style={{marginTop:"10px",marginLeft:"5px",color:"rgb(225,225,225"}}>Suggested For You</span>
        {tempost.map((item,key)=>(
            <div className="userprofile" key={key}>
                <img src={item.profilepic} alt="profilepic" className='profilepic' />
                <span>{item.username}</span>
                <span className="followbtn">Follow</span>
            </div>
        ))}
    </div>
  )
}

export default RightNav