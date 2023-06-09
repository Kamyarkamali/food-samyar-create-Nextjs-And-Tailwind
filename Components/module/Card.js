import Link from 'next/link';
import React from 'react'

const location="https://www.svgrepo.com/show/127575/location-sign.svg";
const dollar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhpSjVu0gALXZfZw6Yp5Mqy4ATN2kpLuO_mQ&usqp=CAU";

function Card(props) {
    const {id,name,price,discount,introduction,details}=props;
  return (
    <div className='relative m-4 bg-red-500 p-[5px] hover:scale-105 duration-300'>
        <Link href={`/menu/${id}`}>
        <img src={`/images/${id}.jpeg`} alt={name} className='w-[200px] rounded-lg'/>
        <div>
            <h4 className='text-white font-bold text-center'>{name}</h4>
            <div className='flex items-center justify-between text-gray-400 py-4'>
                {details[0].Cuisine}
                <img className='w-[15px]' src={location} alt='location'/>
            </div>
        </div>

        <div className='flex items-center justify-between'>
        <div className='flex gap-2 text-white font-bold'>
            <span>تومان</span>
            {discount ? (
                price*(100-discount)/100
            ) : <span>{price}</span>}
            </div>
            <img src={dollar} alt='dollar' className='w-[30px]'/>
        </div>
    <div>
        {discount ? <span className='absolute top-0 bg-red-500 text-white font-bold rounded-lg'>{discount} %</span> : null}
    </div>
        <div className='flex justify-center py-4'>
        <button className='bg-blue-700 text-white font-bold p-1 rounded-lg cursor-pointer'>اطلاعات بیشتر</button>
        </div>
        </Link>
    </div>
  )
}

export default Card