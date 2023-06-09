import React from 'react'

function CatigorisePage() {
  return (
    <div className='max-w-[900px] m-auto mt-[100px]'>
        <h2 className='border-b-[2px] text-blue-500 border-green-700 w-fit'>دسته بندی</h2>
        <div className='py-6'>
            <div className='flex gap-4 justify-start'>
                <select className='border-none text-green-500 font-bold bg-none outline-none'>
                    <option>انتخاب کن</option>
                    <option>آسان</option>
                    <option>معمولی</option>
                    <option>سخت</option>
                </select>
                <select className='text-green-500 font-bold'>
                    <option>تایم پخت</option>    
                    <option>بیشتر از 30 دقیقه</option>    
                    <option>کمتر از 30 دقیقه</option>    
                </select>     
            </div>
            <div>
                <button className='ml-[60px] mt-7 bg-green-700 p-[5px] text-white font-bold rounded-lg'>پیدا کن</button>
            </div>
        </div>
    </div>
  )
}

export default CatigorisePage