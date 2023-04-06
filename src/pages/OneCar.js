import React from 'react'
import { useParams } from 'react-router-dom'
import { auto } from '../array/ProductArray'


function DescriptTemplate({ foto, desc, BodyType, SeatingCapacity, FuelType, cylinder, TransmissionType, FuelTankCapacity, MaxPower }) {
   return (
      <div className='car-description'>
         <div className='car-foto'>
            <img src={foto} />
         </div>
         <ul className='description'>
            <li>Description: {desc}</li>
            <li>Body Type: {BodyType}</li>
            <li>Seating Capacity: {SeatingCapacity}</li>
            <li>Fuel Type: {FuelType}</li>
            <li>Cylinder: {cylinder}</li>
            <li>Transmission Type: {TransmissionType}</li>
            <li>Fuel Tank Capacity: {FuelTankCapacity}</li>
            <li>Max Power: {MaxPower}</li>
         </ul>
      </div>
   )
}
function OneCar() {
   const { marca } = useParams()
   console.log(marca)
   const compair = auto.filter((el, i) => el.marca == marca)
   const descript = compair.map((el, i) => {
      return <DescriptTemplate key={i} foto={el.foto} desc={el.desc} BodyType={el.BodyType} SeatingCapacity={el.SeatingCapacity} FuelType={el.FuelType} cylinder={el.cylinder} TransmissionType={el.TransmissionType} FuelTankCapacity={el.FuelTankCapacity} MaxPower={el.MaxPower} />
   })
   return (
      <div className='center-adapt'>
         <div className='marca'>{marca}</div>
         <div>{descript}</div>
      </div>
   )
}

export default OneCar