import React, { useState } from 'react'
import Feed from '../../Componenets/Feed'
import './HomePage.scss'
import { BiHomeAlt, BiSearch } from "react-icons/bi"
import { CgProfile } from "react-icons/cg"
import { PiMessengerLogoBold } from "react-icons/pi"
import { FiPlusSquare } from "react-icons/fi"
import RightNav from '../../Componenets/RightNav'
import Searchcmp from '../../Componenets/Searchcmp'
import Profile from '../../Componenets/profile/Profile'
import NewPost from '../../Componenets/newpost/NewPost'
import Message from '../../Componenets/Message'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveComp } from '../../ReduxSetup/ActiveComponentSlice'


const HomePage = () => {
  const [display, setDisplay] = useState("feed")
  const dispatch=useDispatch()
  const activecmp=useSelector((state)=>state.activecomponent)
 
  let Comp = <Feed />
  switch (activecmp) {
    case "search":
      Comp = <Searchcmp />
      break;
    case "profile":
      Comp = <Profile />
      break;
    case "newpost":
      Comp = <NewPost />
      break;
    case "message":
      Comp = <Message />
      break;
    default:
      Comp = <Feed />
      break;
  }
  

  return (
    <div className="homepage">

      <div className="leftnav">
        {/* <h1 className="logo">Instagram</h1> */}
        <div className={display === "feed" ? "active" : "navicon"} onClick={() => {setDisplay("feed");dispatch(setActiveComp("feed"))}}><BiHomeAlt className='ic' />
          <span >Home</span></div>
        <div className={display === "search" ? "active" : "navicon"} onClick={() =>{setDisplay("search");dispatch(setActiveComp("search"))}}><BiSearch className='ic' /><span>Search</span></div>
        <div className={display === "profile" ? "active" : "navicon"} onClick={() => {setDisplay("profile");dispatch(setActiveComp("profile"))}}><CgProfile className='ic' /><span>Profile</span></div>
        <div className={display === "newpost" ? "active" : "navicon"} onClick={() => {setDisplay("newpost");dispatch(setActiveComp("newpost"))}} ><FiPlusSquare className='ic' /><span>New Post</span></div>
        <div className={display === "message" ? "active" : "navicon"} onClick={() => {setDisplay("message");dispatch(setActiveComp("message"))}} ><PiMessengerLogoBold className='ic' /><span>Message</span></div>
      </div>
      <div className={display==="feed"?"middle":"middle1"}>

        {Comp}

      </div>
      {display === "feed" ? <div className="rightnav">
        <RightNav setDisplay={setDisplay} />
      </div> : ""}
    </div>
  )
}

export default HomePage