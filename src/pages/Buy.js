import React from 'react';
import './pages.css';
// localStorage.clear()
function BuyTemplate({ id, foto, marca, price }) {
   return (
      <div className='buy'>
         <div className='buy__foto'>
            <img src={foto} />
         </div>
         <h3 className='buy__marca'>{marca}</h3>
         <h4 className='buy__price'>{price}</h4>
      </div >
   )
}

function EmptyBasket() {
   return (
      <p>Basket Empty!!!</p>
   )
}

function Buy() {
   let resultObject = JSON.parse(localStorage.getItem('car'))
   let resultCar
   if (resultObject !== null) {
      resultCar = resultObject.map((el, i) => {
         return <BuyTemplate key={i} foto={el.foto} marca={el.marca} price={el.price} />
      })
   }

   // let empty = (resultObject === null) ? EmptyBasket() : resultCar

   console.log(resultObject)

   return (
      <div className='buy-container'>{resultCar || EmptyBasket()}</div>
   )
}

export default Buy