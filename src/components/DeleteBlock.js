import React from 'react'

const deleteTicket = ()=>{
  console.log("deleted");
}

function DeleteBlock() {
  return (
    <div className='delete-block' >
      <div className='delete-icon' onClick={deleteTicket} >
      &#128465;
      </div>
    </div>
  )
}

export default DeleteBlock