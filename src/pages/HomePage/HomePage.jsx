import React from 'react'
import Feed from '../../Componenets/Feed'
import './HomePage.scss'
import { BiHomeAlt, BiSearch } from "react-icons/bi"
import { CgProfile } from "react-icons/cg"
import { FiPlusSquare } from "react-icons/fi"
import RightNav from '../../Componenets/RightNav'

const HomePage = () => {
  return (
    <div className="homepage">

      <div className="leftnav">
        {/* <h1 className="logo">Instagram</h1> */}
        <div className='navicon'><BiHomeAlt className='ic' />
          <span>Home</span></div>
        <div className='navicon'><BiSearch className='ic' /><span>Search</span></div>
        <div className='navicon'><CgProfile className='ic' /><span>Profile</span></div>
        <div className='navicon'><FiPlusSquare className='ic' /><span>New Post</span></div>
      </div>
      <div className="middle">

        <Feed />
      </div>
      <div className="rightnav">
        <RightNav/>
      </div>
    </div>
  )
}

export default HomePage