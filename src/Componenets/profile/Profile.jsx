import React, { useEffect, useState } from 'react'
import './Profile.scss'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Profile = () => {
  
  // const [user, setUser] = useState([])
  const user=useSelector(state=>state.user)
  const nav=useNavigate()
  const [posts, setPosts] = useState([])

  const [totalpostcount, setTotalpostCount] = useState(0)
  const [followers,setFollowers]=useState([])
  const [following,setFollowing]=useState([])
  const [showpost, setShowpost] = useState(false)
  const [imgname,setImgname]=useState("default.jpg")
  useEffect(()=>{
    if(user===null){
      nav("/auth")
    }
  },[user])

  useEffect(() => {
    axios.get(`/post/user/all/${user?.id}`).then((res) => {
      setPosts(res.data)
      setTotalpostCount(res.data.length);
    }).catch((e) => console.log(e))
    axios.get(`/user/followers/${user?.id}`).then((res)=>setFollowers(res.data)).catch((e)=>console.log(e))
    axios.get(`/user/following/${user?.id}`).then((res)=>setFollowing(res.data)).catch((e)=>console.log(e))
  }, [])
  return (
    <div className="profile">
      <div className="user">
        <div className="profilephoto">
          <img src={`http://localhost:8080/img/${user.profilepic}`} alt="profilephoto" />
          <span>{user?.name}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolorem molestiae commodi id molestias sunt!</p>
        </div>
        <div className="userfollowers">
          <h2>{totalpostcount}</h2>
          <span>post</span>
        </div>
        <div className="userfollowers">
          <h2>{followers.length}</h2>
          <span>followers</span>
        </div>
        <div className="userfollowers">
          <h2>{following.length}</h2>
          <span>followings</span>
        </div>

      </div>
      <div className="userposts">
        {posts.map((item, key) => (
          <div className="previewpost" key={key} onClick={() => {setShowpost(!showpost);setImgname(item.imageName)}}>
            {item.imageName !== "default.jpg" ? <img src={`http://localhost:8080/img/${item.imageName}`} /> : ""}
          </div>
        ))}


      </div>


      {showpost ? 
      <PoppedPost showpost={showpost} setShowpost={setShowpost} imgname={imgname}/>
      : ""}


    </div>
  )
}
const PoppedPost=({showpost,setShowpost,imgname})=>{
  return(
    <div className="poppedup" onClick={()=>setShowpost(!showpost)}>
          <div className="popeduppost">
            <div className="left">
              <img src={`http://localhost:8080/img/${imgname}`} alt="" />
            </div>
          </div>
        </div> 
  )
}

export default Profile