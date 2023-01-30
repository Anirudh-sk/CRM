import React from 'react'
import logo from "../assets/1.png";
import {useNavigate} from 'react-router-dom'

function Nav() {

    const navigate = useNavigate()
  return (
    <nav>
        <div className='logo-container'>
            <img src={logo} alt="logo" />
            
        </div>
        <div className='controls-container'>
            <div className='icon' onClick={()=>navigate('/tickets')}>+</div>
            <div className='icon' onClick={()=>navigate('/')}> &#171; </div>
        </div>
    </nav>
  )
}

export default Nav