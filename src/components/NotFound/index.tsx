import React from 'react'
import { useNavigate } from 'react-router-dom'
import picture from "../../images/bro.png"
const NotFound = () => {
const navigate = useNavigate()

    function back(){
        navigate("/")
    }
  return (
    <div className='smContainer d-f fd-column align-items-center mt-1 mb-2 g-1'>
        <div><img src={picture} alt="" /></div>
        <div className='fs-40 fw-700'>This page could not be found</div>
        <div className='fs-md'>The Page you are looking for might have been removed or temporarily unavailable</div>
        <div><button style={{width:"284px",height:"48px"}} className='btn bg-primary text-light' onClick={back}>Back to Homepage</button></div>
    </div>
  )
}

export default NotFound