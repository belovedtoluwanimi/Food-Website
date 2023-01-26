import React from 'react'
// import { AiFillHeart } from 'react-icons/ai'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* card */}
        <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-full p-2'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        </div>
        <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Enjoy delicious Strawberries</p>
                <p className='px-2'>Sweet!😵</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-full p-2'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://pixabay.com/get/g01e3b4517be812d4cad330c8a3dc240bf0b5414d1dec8eb75ee210d56bdcaeb4343ad7006806ff63e51ef5fffd5f5ac648a52f2c10249b471b7e97f93f863a34_640.jpg" alt="" />
        </div>
        <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Ever Tasting Rice!</p>
                <p className='px-2'>Delivered Everyday</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-full p-2'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://pixabay.com/get/g037b4e9150c55268184c283956c584293c3680f55b8809be13359a9f78339ff6aa943f8960fff1dc66213a6469b7ef38_640.jpg" alt="" />
        </div>
    </div>
  )
}

export default HeadlineCards