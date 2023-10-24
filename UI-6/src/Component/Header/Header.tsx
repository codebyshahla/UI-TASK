import React from 'react'
import img from '../../assets/theatre.webp'
function Header
() {
  return (
    <div>
        <div className='w-screen h-screen bg-black flex justify-center items-center'>
            <div className='bg-cover w-[80%] h-[80%]' style={{backgroundImage:`url(${img})`}}>
                <div className='py-6 sm:px-24 '>

                <ul className='text-white font-bold flex gap-6 sm:flex-row flex-col'>
                    <li className='font-extrabold text-lg'><span className='flex-1'>Mycket</span></li>
                    <span className='flex-1'></span>
                    <li>Features</li>
                    <li>About</li>  
                    <li>Contact Us</li>
                    <li><button className='bg-yellow-500 text-black  rounded text-lg'>Sign in</button></li>
                </ul>
                
                    <ul className='text-white flex gap-6 flex-col sm:flex-row py-14 '>
                        <li className='border-l-4 border-yellow-500'>50K+ <br /><p>Active Users</p></li>
                        <li className='border-l-4 border-yellow-500'>5* <br /><p>Rating on playstore</p></li>
                    </ul>

                   <div>
                    <h1 className='text-white font-extrabold text-3xl'>You Shortcut to <br />Seamless Ticket<br />Booking!</h1>
                    <p className='text-white'>Mycket is your easy mpovie ticket  app. <br />Find your film, choose a show time and <br />Get your ticket hassle free. Enjoy the <br />Movie!</p><br /><br />
                    <button className=' bg-yellow-500 w-64 rounded-md h-8'>Booking Now</button>
                   </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default  Header

