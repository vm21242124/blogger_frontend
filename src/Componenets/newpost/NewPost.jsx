import React, { useRef, useState } from 'react'
import './NewPost.scss'
import { MdOutlineAddPhotoAlternate, MdOutlineAddLocationAlt } from 'react-icons/md'
import { VscMention } from 'react-icons/vsc'
import { ImCross } from 'react-icons/im'
import axios from 'axios'

const NewPost = () => {
  const [file, setFile] = useState(null)
  const [content, setContent] = useState("")
  const imginpRef = useRef(null)
  const form=new FormData()
  form.append("file",file);
  const handleImageChange = (e) => {
    const f = e.target.files[0]
    if (f) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFile(e.target.result)
      }
      reader.readAsDataURL(f);
    } else {
      setFile(null)
    }
  }
  const handlesubmit=(e)=>{
    e.preventDefault();
    axios.post("/post/create/2",{content,imageName:"default.jpg"}).then((res)=>{
      if(res.status===200){
        console.log(res.data);
        axios.post(`/post/upload/img/9`,form).then((res)=>console.log(res.data)).catch((e)=>console.log(e))
      }
    }).catch((e)=>console.log(e));
  }
  return (
    <div className="newpost">


      <span className='lbl'>Enter Caption...</span>
      <textarea type="text" required={true} onChange={(e) => setContent(e.target.value)} />
      <div className="options">
        <input type="file" hidden={true} ref={imginpRef} typeof='image' onChange={handleImageChange}
          accept='image/*' className='picinp' /
        ><MdOutlineAddPhotoAlternate onClick={() => imginpRef.current.click()} className='i1' />
        <MdOutlineAddLocationAlt className='i1' />
        <VscMention className="i1" />
      </div>
      <button onClick={handlesubmit} >add post
      </button>
      {file !== null ?
        <div className="imgpreview">
          <div>

            <ImCross className='c' onClick={() => setFile(null)} />
          </div>
          <img src={file} alt="selectedimg" />
        </div> : ""}
    </div>
  )
}

export default NewPost