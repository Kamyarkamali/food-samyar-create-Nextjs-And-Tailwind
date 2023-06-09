import React from 'react'
import Card from '../module/Card';

function MenuFood({data}) {
  return (
    <div className='flex-wrap flex justify-center sm:justify-evenly md:justify-center lg:justify-center gap-5 max-w-[1100px] mx-auto py-9'>
        {data ?data.map((item)=>(
            <Card key={item.id} {...item} />
         )) : null}
        
    </div>
  )
}

export default MenuFood