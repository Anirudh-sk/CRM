import React from 'react'
import  blankAvatar  from "../assets/Blank.gif";

function AvatarDisplay({ticket}) {
  return (
    <div className='avatar-container'>
      <div className='img-container'>
        <img src={ticket.avatar ? ticket.avatar : blankAvatar} alt='pic' />
      </div>
    </div>
  )
}

export default AvatarDisplay