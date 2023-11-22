import React, { useEffect, useState } from 'react'
import { BiDotsHorizontal } from "react-icons/bi"
import { AiOutlineHeart } from "react-icons/ai"
import { GoComment } from "react-icons/go"
import { PiShareFatLight } from "react-icons/pi"
import {FaHeart} from "react-icons/fa"
import axios from 'axios'
import { useSelector } from 'react-redux'

const Posts = () => {
    const [post, setPost] = useState([]);
    const user=useSelector(state=>state.user)
    useEffect(() => {
        axios.get("/post/all").then((res) => {
            setPost(res.data)
            console.log(res.data)
        }).catch(e => console.log(e))
       
    }, [])
    const isLiked=(post,userid)=>{
        if(post.likedby.find(obj=>obj.id===userid)){
            return true
        }
        return false;
    }
    const likeHandler=(postid,userid)=>{
        axios.get(`/post/${postid}/likedby/${userid}`).then(res=>console.log(res.data)).catch(e=>console.log(e))
    }

    return (
        <div className="posts">
            {post.map((item, key) => (
                <div className="post" key={key}>
                    <div className="postheader">
                        <div>
                            <img src={`http://localhost:8080/img/${item.user?.profilepic}`} alt="profile" className="profilepic" />
                            <h3>{item.user?.name}</h3>
                        </div>
                        <BiDotsHorizontal className='moredetails' />
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
                        {isLiked(item,user.id)?<FaHeart className='f' color='red'/>:<AiOutlineHeart className='f' />}
                        <GoComment className='f' />
                        <PiShareFatLight className='f' />
                    </div>
                    <div className="postfooter">

                        <span>{item.likedby.length} Likes</span>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default Posts