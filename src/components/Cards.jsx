import React from 'react';

const Cards = () => {
    return (
        <>
            <div className='cards-main'>

                <div className="card border-warning mb-3" style={{ maxWidth: '20rem' }}>
                    <div className="card-header">Pantalon</div>
                    <div className="card-body">
                        <h4 className="card-title">Jean Negro</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

                <div className="card border-warning mb-3" style={{ maxWidth: '20rem' }}>
                    <div className="card-header">Buzo</div>
                    <div className="card-body">
                        <h4 className="card-title">Buzo Canguro</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

                <div className="card border-warning mb-3" style={{ maxWidth: '20rem' }}>
                    <div className="card-header">Remera</div>
                    <div className="card-body">
                        <h4 className="card-title">Remera Fit</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Cards;
