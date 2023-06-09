import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function Layout({children}) {
    const [mobile,setMobile]=useState(false);
    const [open,setOpen]=useState(false);

    useEffect(()=>{
        const handelers=()=>{
            if(window.innerWidth<768){
                setMobile(true)
            } else{
                setMobile(false)
            }
        }

        window.addEventListener("resize",handelers)
        return ()=>{
            window.removeEventListener("resize",handelers)
        }
    },[])

    const openHandeler=()=>{
        setOpen(!open)
    }

  return (
    <div className='max-w-[1400px] mx-auto'>
    <header className='flex justify-between bg-green-500 p-[15px]'>
        <div className='flex justify-between w-full items-center'>
            <Link href={"/"}>
            <img className='w-[50px] rounded-[90%] object-cover' src='data:image/png;base64,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'/>
            </Link>
           {mobile&&<img src='data:image/jpeg;base64,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' className='w-[40px] h-[35px] cursor-pointer rounded-[20%] relative' onClick={openHandeler}/>}
        </div>
        {open&&<div className='bg-gray-500 top-[60px] text-center h-[97vh] w-[200px] right-0 absolute'>
            <div className='p-9'>
            <p className='mt-9'>خانه</p>
            <p className='mt-9'>منو</p>
            <p className='mt-9'>درباره ما</p>
            </div>
        </div>}
        {!mobile&&<div className='flex items-center font-bold text-white text-2xl'>
        </div>}
        {!mobile&&<div className='flex items-center gap-4'>
            <Link href={"/menu"}>
            <button className='bg-orange-600 h-[60px] w-[100px] text-white p-[4px] rounded-lg font-bold hover:scale-105 duration-300'>منو غذاها</button>
            </Link>
            <Link href={"/catigurise"}>
            <button className='bg-orange-600 h-[60px] w-[100px] text-white p-[4px] rounded-lg font-bold hover:scale-105 duration-300'>دسته بندی ها</button>
            </Link>
            <Link href={"/"}>
            <button className='bg-blue-500 h-[60px] w-[100px] text-white p-[4px] rounded-lg font-bold hover:scale-105 duration-300'>صفحه اصلی</button>
            </Link>
            
        </div>}
    </header>

    <div className='min-h-[700px]'>{children}</div>

    <footer className=' bg-blue-600 max-w-[1600px]'>
        <div className='text-center font-bold text-gray-200 p-[25px]'>
            <h1>
                این سایت جهت نمایش نمونه کار توسط اینجانب طراحی شده
            </h1>
        </div>
    </footer>

    </div>
  )
}

export default Layout