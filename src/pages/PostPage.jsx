import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PostPage = () => {
    return(
        <>
        <AllCategoryNav/>
        <CreateAPost/>
      
        <GetAllPost/> 
        
       < GetSelectedCatPost/>


        </>
    )
}
const GetSelectedCatPost=()=>{
    return(
        <>hello</>
    )
}
const CreateAPost=()=>{
    const [title,setTitle]=useState("")
    const[userid,setUserid]=useState("");
    const [catid,setCatId]=useState("");
    const [imageName,setImagename]=useState("");
    const [content,setContent]=useState("")
    const handlesubmit=(e)=>{
        e.preventDefault();
        axios.post(`/post/create/${userid}/cat/${catid}`,{title,content}).then((res)=>{
            alert("created post")
        }).catch((e)=>console.log(e.message))
    }
    
    return(
        <>
        <form >
          
            <input type="text"  placeholder='Title' onChange={(e)=>setTitle(e.target.value)}/>
            <textarea type="text" placeholder='content'  onChange={(e)=>setContent(e.target.value)} />
            <input type="text" placeholder="userid" onChange={(e)=>setUserid(e.target.value)} />
            <input type="text" placeholder='catid' onChange={(e)=>setCatId(e.target.value)} />
            <button onClick={handlesubmit}>createpost</button>
        </form>
        </>
    )
}

const GetAllPost=()=>{
    const nav=useNavigate();
    const [post, setPost] = useState([])
    useEffect(() => {
        axios.get("/post/all").then((res) =>  setPost(res.data)).catch((e) => console.log(e.message))
    }, [])
    return (
        <div>{post.map((item, key) => (

            <div key={key} className="div"><span>post id:{item.postId}</span>
            <span onClick={()=>nav(`/posts/${item.postId}`)}>{item.title}</span>
            <span>catid: {item.catgory.id}</span>
            <span>userid: {item.user.id}</span>
            </div>
        ))}
        </div>
    )
}
const AllCategoryNav=()=>{
    const [cat,setCat]=useState([])
    useEffect(()=>{

        axios.get("/category/all").then((res)=>setCat(res.data)).catch((e)=>console.log(e.message))
    },[])
    return(
        <div style={{display:"flex",justifyContent:"space-around"} }>
        {cat.map((item,key)=>(
            <div className="cat" key={key}>{item.name}</div>
        ))}
        </div>
    )
}
export default PostPage