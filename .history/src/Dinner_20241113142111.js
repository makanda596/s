import React from 'react';

function Dinner({ nextStep }) {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Our Dinner Date 🍽️</h2>
            <p>I've planned a special dinner just for us tonight.</p>
            <button onClick={nextStep}>Next</button>
        </div>
    );
}

export default Dinner;
