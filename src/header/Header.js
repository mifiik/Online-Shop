import React from 'react';
import './header.css';
import { Link } from 'react-router-dom'

function Header() {
   return (
      <div className='header'>
         <div className='logo'>
            <h3 className='logo__name'>KATE</h3>
            <h3 className='logo__surname'>FOSTER</h3>
         </div>
         <ul className='list'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/shop'>Shop</Link></li>
            <li><Link to='/buy'>Buy</Link></li> 
         </ul>
      </div>
   )
}

export default Header