import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SinglePostPage = () => {
  const { id } = useParams()
  const [post, setPost] = useState([])
  useEffect(() => {
    axios.get(`/post/${id}`).then((res) =>setPost(res.data)).catch((e) => console.log(e.message))
  }, [])
 
  return (
    <div><span>{post?.title}</span><br />
    <span>{post?.content}</span><br />
    <span>created At: {post?.addeddate}</span><br />
    <span>Author: {post?.user?.name}</span><br />
    <span>Category: {post?.catgory?.name}</span></div>


  )
}

export default SinglePostPage