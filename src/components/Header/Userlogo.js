import React from 'react'
import userlogo from "../../../assets/images/user.png"

const Userlogo = () => {
  return (
    <div>
      <a href="/">
            <img src={userlogo} alt="logo" className='w-14'/>
        </a>
    </div>
  )
}

export default Userlogo
