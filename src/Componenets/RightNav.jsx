import React from 'react'
import { tempost, userdata } from '../Tempdata'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveComp } from '../ReduxSetup/ActiveComponentSlice'

const RightNav = ({setDisplay}) => {
  const user=useSelector(state=>state.user)
  const dispatch =useDispatch()
  return (
    <div className="right">
        <div className="userprofile">
            <img className="profilepic" src={`http://localhost:8080/img/${user?.profilepic}`}/>
            <span onClick={()=>{dispatch(setActiveComp("profile"));setDisplay("profile")}}>{user?.name}</span>
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