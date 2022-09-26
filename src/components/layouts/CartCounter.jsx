import React, { useState } from 'react';

const CartCounter = () => {
    const [cartCounter, setcartCounter] = useState(0);
    function addCartCounter(operation){
       if(operation === '+'){
           setcartCounter(cartCounter + 1);
       }else{
            if(cartCounter > 0){
                setcartCounter(cartCounter - 1);
            }
       }
    }

    return (
        <>
            <div className="d-flex flex-row justify-content-center">
                <button className='btn btn-outline-dark m-2' onClick={() => addCartCounter("+")}>+</button>
                <p className='m-2'>{cartCounter}</p>
                <button className='btn btn-outline-dark m-2' onClick={() => addCartCounter("-")}>-</button>
            </div>
        </>
    );
}

export default CartCounter;
