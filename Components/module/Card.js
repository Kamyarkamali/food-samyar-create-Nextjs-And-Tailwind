import React from 'react'

const location="https://www.svgrepo.com/show/127575/location-sign.svg";
const dollar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhpSjVu0gALXZfZw6Yp5Mqy4ATN2kpLuO_mQ&usqp=CAU";

function Card(props) {
    const {id,name,price,discount,introduction,details}=props;
    console.log(props)
  return (
    <div className='relative'>
        <img src={`/images/${id}.jpeg`} alt={name} className='w-[200px]'/>
        <div>
            <h4>{name}</h4>
            <div className='flex items-center'>
                {details[0].Cuisine}
                <img className='w-[15px]' src={location} alt='location'/>
            </div>
        </div>

        <div className='flex items-center justify-between'>
        <div className='flex gap-2'>
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

    </div>
  )
}

export default Card