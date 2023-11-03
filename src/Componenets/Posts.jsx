import React from 'react'
import { tempost } from '../Tempdata'
import {BiDotsHorizontal} from "react-icons/bi"
import {AiOutlineHeart} from "react-icons/ai"
import {GoComment} from "react-icons/go"
import {PiShareFatLight}from "react-icons/pi"

const Posts = () => {
  return (
    <div className="posts">
        {tempost.map((item,key)=>(
            <div className="post" key={key}>
                <div className="postheader">
                    <div>
                        <img src={item.profilepic} alt="profile" className="profilepic" />
                        <h3>{item.username}</h3>
                    </div>
                    <BiDotsHorizontal className='moredetails'/>
                </div>
                <div className="postcontent">
                    <p>
                        {item.content}
                    </p>
                </div>
                <div className="postimage">
                    <img src={item.postpic} alt="" className="postpic" />
                </div>
                <div className="postfooter">
                    <AiOutlineHeart className='f'/>
                    <GoComment className='f'/>
                    <PiShareFatLight className='f'/>
                </div>

            </div>
        ))}
    </div>
  )
}

export default Posts