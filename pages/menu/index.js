import MenuFood from '@/Components/template/MenuFood'
import React from 'react'

function index({data}) {
  return (
    <div>
      <MenuFood data={data}/>
    </div>
  )
}

export default index


export async function getStaticProps(){
    const res=await fetch("https://api-food-samyar.vercel.app/data")
    const data=await res.json()
    return{
        props:{
            data
        },
        revalidate:10,
    }
}