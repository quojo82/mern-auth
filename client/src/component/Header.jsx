
 import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const {currentUser} = useSelector((state)=>state.user)
  return (
   <div className='bg-slate-200'>
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
       <Link to='/'> <h1 className='font-bold'>Auth App</h1></Link>
        <ul className='flex gap-4'>
            <Link to ='/'><li>Home</li></Link>
            <Link to ='/contact'><li>Contact</li></Link>
            <Link to='/profile'>
            {
              currentUser ? (
                <img src={currentUser.profilePicture} alt="Profile"
                className='h-7 w-7 rounded-full object-cover'/>
              ):( 
                <Link to='/signin'><li>Sign In</li></Link>
                
              )
            }
            
            
            </Link>
        
        </ul>
     
    </div>
   </div>
  )
}

export default Header
