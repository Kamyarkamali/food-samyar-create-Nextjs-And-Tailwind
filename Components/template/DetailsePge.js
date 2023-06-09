import Link from 'next/link';
import React from 'react'

const dollar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq_6ESK0hGmzVVZ_ANL0sf8M47tFU6p5azcw&usqp=CAU";

function DetailsePge(props) {
    const {name,discount,introduction,price,id,details}=props
    console.log(props);
  return (
    <div className='max-w-[1000px] m-auto py-9'>
        <div className='flex justify-center'>
        <img className='w-[640px] rounded-lg' src={`/images/${id}.jpeg`}/> 
        </div>
        <div className='flex justify-center gap-4 items-center py-5'>
            <div className='flex gap-2 text-gray-500 font-bold'>
            <span>تومان</span>
            {discount ? (price*(100-discount)/100):price}
            </div>
            <img className='w-[20px]' src={dollar} />
            {discount ? <span className='bg-red-500 p-1 text-white font-bold rounded-lg'>این غذا تخفیف خورده</span> : null}
        </div>   
        <p className='text-center text-blue-600 font-bold text-xl'>{name}</p>
        <div className='shadow-lg p-4'>
            <p className='text-right leading-[40px] text-gray-600 font-bold text-xl'>{introduction}</p>
        </div>
        <div className='flex justify-center items-center text-red-600 font-bold gap-1 text-xl py-4'>
            <span> {details[0].Cuisine} است</span>
            <span>این غذا</span>
        </div>
        <div className='flex justify-center'>
            <button className='bg-green-500 p-4 text-white font-bold text-xl rounded-xl cursor-pointer'>سفارش میدهم</button>
        </div>
        <div className='flex justify-center py-5'>
            <Link href={"/menu"} className='bg-red-500 p-3 text-white font-bold text-xl rounded-lg'>به لیست منو برو</Link>
        </div>
    </div>
  )
}

export default DetailsePge