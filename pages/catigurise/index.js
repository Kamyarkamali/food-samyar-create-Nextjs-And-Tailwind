import React from 'react'
import CatigorisePage from '@/Components/template/CatigorisePage'

function index({data}) {
  return (
    <div>
      <CatigorisePage data={data}/>
    </div>
  )
}

export default index


export async function getServerSideProps(context){
  const {query:{difficulty,time}}=context

  const res=await fetch("https://api-food-samyar.vercel.app/data")
  const data=await res.json()

  const filteredData = data.filter((item) => {
    const difficultyResult = item.details.filter(
      (detail) => detail.Difficulty && detail.Difficulty === difficulty
    );
    const timeResult = item.details.filter((detail) => {
      const cookingTime = detail["Cooking Time"] || "";
      const [timeDetail] = cookingTime.split(" ");
      if (time === "less" && timeDetail && +timeDetail <= 30) {
        return detail;
      } else if (time === "more" && +timeDetail > 30) {
        return detail;
      }
    });

    if (time && difficulty && timeResult.length && difficultyResult.length) {
      return item;
    } else if (!time && difficulty && difficultyResult.length) {
      return item;
    } else if (time && !difficulty && timeResult.length) {
      return item;
    }
  });

  return{
    props: { data: filteredData },
  }
}