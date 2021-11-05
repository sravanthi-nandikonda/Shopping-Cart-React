import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context'



function Header() {
    const {cart}=useContext(CartContext);
    return (
        <div>
            <ul className='nav'>
                <li className='prod'>
                    <Link to='/'>HomePage</Link>
                    </li>
                <li className='prod1'>
                    <Link to='/cart'>Cart({cart.length})</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
