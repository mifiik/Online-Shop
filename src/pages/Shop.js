import React from 'react';
import './pages.css';
import { auto } from '../array/ProductArray';
import { Link } from 'react-router-dom';

function ShopTeamplate({ marca, price, foto, id }) {
   // console.log(id)
   function addProduct() {
      console.log(id, marca)
   }
   return (
      <div className='cards'>
         <div className='cards__img'>
            <img src={foto} />
         </div>
         <div className='discription'>
            <p className='discription__marca'>{marca}</p>
            <p className='discription__price'>{price}</p>
            <Link to={`/car/${marca}`}>More Information</Link>
         </div>
         <div>
            <button className='cards__button' onClick={addProduct}>Add</button>
         </div>
      </div >
   )

}
function Shop() {
   const final = auto.map((el, i) => {
      return <ShopTeamplate key={i} foto={el.foto} marca={el.marca} price={el.price} id={el.id} />
   })
   return (
      <div className='final-auto'>
         {final}
      </div>
   )
}

export default Shop