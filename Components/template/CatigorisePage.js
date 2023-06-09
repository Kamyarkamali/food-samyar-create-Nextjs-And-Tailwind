import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Card from '../module/Card'

function CatigorisePage({data}) {
    const [query,setQuery]=useState({difficalty:"",time:""})
    const changeHandeler=(e)=>{
        setQuery({...query,[e.target.name]:e.target.value})
    }

    const router=useRouter()

    const clickHandeler=()=>{
        console.log(query)

        router.push({pathname:"catigurise",query})
    }

  return (
    <div className='max-w-[900px] m-auto mt-[100px]'>
        <h2 className='border-b-[2px] text-blue-500 border-green-700 w-fit'>دسته بندی</h2>
        <div className='py-6'>
            <div className='flex gap-4 justify-start'>
                <select value={query.difficalty} name='difficalty' className='border-none text-green-500 font-bold bg-none outline-none' onChange={changeHandeler}>
                    <option value="">انتخاب کن</option>
                    <option value="Easy">آسان</option>
                    <option value="medium">معمولی</option>
                    <option value="Hard">سخت</option>
                </select>
                <select value={query.time} name='time' className='text-green-500 font-bold' onChange={changeHandeler}>
                    <option value="">تایم پخت</option>    
                    <option value="more">بیشتر از 30 دقیقه</option>    
                    <option value="less">کمتر از 30 دقیقه</option>    
                </select>     
            </div>
            <div>
                <button onClick={clickHandeler} className='ml-[60px] mt-7 bg-green-700 p-[5px] text-white font-bold rounded-lg'>پیدا کن</button>
            </div>
            <div className='flex flex-wrap'>
                <div className='flex justify-center w-full'>
            {!data.length ? <img src="/images/search.png"/> : null}
                </div>
            {data.map((item)=>(
            <Card key={item.id} {...item}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default CatigorisePage