import Link from 'next/link'
import React from 'react'
import Attribute from '../module/Attribute'
import Definition from '../module/Definition'
import Slider from "../module/Slider";
import MenuFood from './MenuFood';

function Home() {
  return (
    <div className='max-w-[1000px] py-9 m-auto'>
        <div className='flex flex-col items-center sm:flex-row md:flex:row lg:flex-row sm:justify-between md:justify-between lg:justify-between'>
        <div>
            <img className='w-[400px]' src='/images/banner.png'/>
        </div>
        <div className='flex flex-col items-center w-[240px] py-8'>
            <h1 className='text-green-500 font-bold text-xl border-b-[2px]'>فست فود سامیار</h1>
            <p className='text-center leading-[30px] text-blue-400 font-bold text-[17px] mt-3'>با یک کلیک سفارش دهید و طعمی متفاوت را تجربه کنید</p>
            <Link href={"/menu"} className='bg-green-600 mt-4 p-[10px] text-white font-bold text-xl rounded-lg hover:scale-105 duration-300'>میخواهم سفارش بدهم</Link>
        </div>
        </div>
        <Attribute/>
        <Definition/>
        <Slider/>
        <MenuFood/>
    </div>
  )
}

export default Home