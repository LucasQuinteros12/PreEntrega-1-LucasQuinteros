import React from 'react';

const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <h2 style={{textAlign: "center"}}>{ greeting }</h2>
        </div>
    );
}

export default ItemListContainer;
