import React from 'react';
import './pages.css';
import { auto } from '../array/ProductArray';
import { Link } from 'react-router-dom';

function ShopTeamplate({ marca, price, foto }) {
   return (
      <div className='cards'>
         <div className='cards__img'>
            <img src={foto} />
         </div>
         <p className='cards__marca'>{marca}</p>
         <p className='cards__price'>{price}</p>
         <Link to={`/car/${marca}`}>More</Link>
      </div >
   )

}
function Shop() {
   const final = auto.map((el, i) => {
      return <ShopTeamplate foto={el.foto} marca={el.marca} price={el.price} />
   })
   return (
      <div>
         {final}
      </div>
   )
}

export default Shop