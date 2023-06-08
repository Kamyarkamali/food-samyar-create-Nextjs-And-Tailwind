import React from 'react'

function index({data}) {
    console.log(data)
  return (
    <div>menu</div>
  )
}

export default index


export async function getStaticProps(){
    const res=await fetch("http://localhost:4000/data")
    const data=await res.json()
    console.log(data)
    return{
        props:{
            data
        }
    }
}