import React from 'react';
import './pages.css';
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
function Buy() {
   let resultObject = JSON.parse(localStorage.getItem('car'))
   // let empty = ('car' == true) ? 0 : ''
   console.log(resultObject)
   let resultCar = resultObject.map((el, i) => {
      return <BuyTemplate key={i} foto={el.foto} marca={el.marca} price={el.price} />
   })
   return (
      <div className='buy-container'>{resultCar}</div>
   )
}

export default Buy