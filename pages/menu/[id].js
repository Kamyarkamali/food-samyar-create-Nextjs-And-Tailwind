import DetailsePge from '@/Components/template/DetailsePge'
import { useRouter } from 'next/router'
import React from 'react'

function MenuId(data) {
  const router=useRouter()

  if(router.isFallback){
    return <h1>لطفا صبر کنید...</h1>
  }

  return (
    <div>
      <DetailsePge {...data}/>
    </div>
  )
}

export default MenuId


export async function getStaticPaths(){
  const res=await fetch("https://api-food-samyar.vercel.app/data")
  const json=await res.json()

  const data=json.slice(0,10)

  const paths=data.map((food)=>({
    params:{id:food.id.toString()},
  }))

  return{
    paths,
    fallback:true,
  }
}


export async function getStaticProps(context){
  const {params}=context
  const res=await fetch(`https://api-food-samyar.vercel.app/data/${params.id}`)

  const data=await res.json();

  if(!data.id){
    return {
      notFound:true
    }
  }

  return{
    props:data,
    revalidate:10,
  }
}