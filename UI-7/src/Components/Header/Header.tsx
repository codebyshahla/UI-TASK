import React from 'react'

function Header() {
  return (
    <div className='bg-violet-100 w-full h-screen flex justify-center items-center'>
      <div className='w-[80%] h-[80%] bg-slate-900 p-12 '>
        <ul className='text-white  flex gap-6 bg-slate-500 sm:flex-col'>
          <li className='font-extrabold text-xl'><span className='flex-1'>TESLA</span></li>
          <span className='flex-1'></span>
          <li>MOEDL S</li>
          <li>MOEDL X</li>
          <li>MOEDL 3</li>
          <li>MOEDL ROAD STAR</li>
          <li>SEMI TRACK</li>
          <li>
            <button className='bg-red-900 flex gap-3 w-16'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
</button>
          </li>
        </ul>
        <div>
          <h1 className='text-white font-extrabold text-3xl'>TESLA <br />ROAD STAR</h1>
        </div>
      </div>
      
    </div>
  )
}

export default Header
