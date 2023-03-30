import React from 'react'
import { useParams } from 'react-router-dom'
import { auto } from '../array/ProductArray'


function DescriptTemplate({ desc }) {
   return (
      <div className='description'>
         <p>{desc}</p>
      </div>
   )
}
function OneCar() {
   const { marca } = useParams()
   console.log(marca)
   const compair = auto.filter((el, i) => el.marca == marca)
   const descript = compair.map((el, i) => {
      return <DescriptTemplate desc={el.desc} />
   })
   return (
      <>
         <div>{marca}</div>
         <div>{descript}</div>
      </>
   )
}

export default OneCar