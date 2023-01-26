import React, { useState } from 'react'
import {AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdFavorite, MdHelp} from 'react-icons/md'
import {FaWallet, FaUserFriends} from 'react-icons/fa'


const Navbar = () => {
    const [nav, setNav] = useState(false)
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        <div className='flex items-center'>
            <div className='cursor-pointer'>
      <AiOutlineMenu onClick={()=> setNav(!nav)} size={30}/>
            </div>
        <h1 className='text-2xl sm:text-3xl  lg:text-4xl px-2'>
            Best <span className='font-bold'>Eats</span>
        </h1>
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                <p className='p-2'>Pickup</p>
            </div>
        </div>

        {/* {search input} */}
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px]
         sm:w-[400px]
          lg:w-[500px]
          '>
            <AiOutlineSearch size={25}/>
            <input className='bg-transparent p-2 focus:outline-none w-full' type="text" placeholder='search foods' />
        </div>
        {/* cart button */}
        <button className='bg-black text-white flex items-center py-2 px-2 rounded-full'>
            <BsFillCartFill className='mr-2' size={20} /> Cart
        </button>

        {/* Mobile Menu */}
        {/* overlay */}
        {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>: ''}
        

        {/* side drawer menu */}

        <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
            <AiOutlineClose onClick={()=> setNav(!nav)} 
             className='absolute right-4 top-4 cursor-pointer' size={30}/>
            <h2 className='text-2xl p-4'> Best <span className='font-bold'>Eats</span></h2>
            <nav>
                <ul>
                    <li className='text-xl py-4 flex'>
                        <TbTruckDelivery className='mr-4 ml-4' size={25} /> Orders
                    </li>
                    <li className='text-xl py-4 flex'>
                        <MdFavorite className='mr-4 ml-4' size={25} /> Favourites
                    </li>
                    <li className='text-xl py-4 flex'>
                        <FaWallet className='mr-4 ml-4' size={25} /> Wallet
                    </li>
                    <li className='text-xl py-4 flex'>
                        <MdHelp className='mr-4 ml-4' size={25} /> Help
                    </li>
                    <li className='text-xl py-4 flex'>
                        <AiFillTag className='mr-4 ml-4' size={25} /> Promotiions
                    </li>
                    <li className='text-xl py-4 flex'>
                        <BsFillSaveFill className='mr-4 ml-4' size={25} /> Best ones
                    </li>
                    <li className='text-xl py-4 flex'>
                        <FaUserFriends className='mr-4 ml-4' size={25} /> Invite Friends
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar
