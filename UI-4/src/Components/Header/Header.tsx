import React from 'react'
import img from '../../assets/OIP.jpeg'

function Header() {
  return (
    <div className='bg-pink-200 h-screen w-screen p-10'>
        <div className=''>
            <ul className='font-bold flex space-x-8 '>
                <li><span className='flex-1 text-orange-500 text-2xl'>Pempek Palebang</span></li>
                <span className='flex-1'></span>
                <li>Jelajah</li>
                <li>Tentang kami</li>
                <li>Daftar</li>
                <li><button className='bg-orange-500 text-white rounded-2xl w-24 h-8'>Masuk</button></li>
            </ul> 
            </div>
            <div className='flex  mt-[15%]'>
            <div className=' w-1/2 flex flex-col justify-center'>
                <h1 className=' font-extrabold text-5xl'>Pempek <span className='text-orange-500'>Asli</span> <br />Dari <span className='text-orange-500'>palembang</span></h1>
                <p className='mt-[2%]'>Kami Many Diakhan Pempek Khas Palembang Dengan Iwak Asli.</p>
               <button className='bg-orange-500 text-white w-28 h-8 rounded-xl mt-[2%]'>Beli Sekang</button>
                <button className='border-2 border-orange-500 text-orange-500 w-28 h-8 rounded-xl mt-[2%]'>Lihat Daftar</button>
            </div>
            <div className='w-1/2 flex items-end justify-center'>
                <img src={img} className='w-96 h-72' alt=""/>
            </div>
            </div>
      
    </div>
  )
}

export default Header
