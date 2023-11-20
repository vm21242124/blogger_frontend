import React, { useEffect, useState } from 'react'
import { tempost } from '../Tempdata'
import {BiDotsHorizontal} from "react-icons/bi"
import {AiOutlineHeart} from "react-icons/ai"
import {GoComment} from "react-icons/go"
import {PiShareFatLight}from "react-icons/pi"
import axios from 'axios'

const Posts = () => {
    const [post,setPost]=useState([]);
    useEffect(()=>{
        axios.get("/post/all").then((res)=>{
            setPost(res.data)
        })
    },[])
  return (
    <div className="posts">
        {post.map((item,key)=>(
            <div className="post" key={key}>
                <div className="postheader">
                    <div>
                        <img src={`http://localhost:8080/img/${item.user?.profilepic}`} alt="profile" className="profilepic" />
                        <h3>{item.user?.name}</h3>
                    </div>
                    <BiDotsHorizontal className='moredetails'/>
                </div>
                <div className="postcontent">
                    <p>
                        {item.content}
                    </p>
                </div>
                <div className="postimage">
                    <img src={`http://localhost:8080/img/${item?.imageName}`} alt="" className="postpic" />
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