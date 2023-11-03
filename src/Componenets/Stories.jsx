import React from 'react'
import { tempstory } from '../Tempdata'

const Stories = () => {
  return (
    <div className="stories">
        {tempstory.map((item,key)=>(
            <div key={key} className='story'>
                <img src={item?.profilepic} alt="" className="storyimg" />
                <p>{item.username}</p>
            </div>
        ))}
    </div>
  )
}

export default Stories