import React from 'react';
import {FaShoppingCart} from 'react-icons/fa';
const CartWidget = () => {
    return (
        <div>
            <button className='btnSections'>
                <FaShoppingCart size={25} className='icons'/>
            </button>
            
        </div>
    );
}

export default CartWidget;
