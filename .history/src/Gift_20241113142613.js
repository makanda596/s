import React from 'react';

function Gift({ nextStep }) {
    return (
        <div className="container" style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Your Gift 🎁</h2>
            <p>I've got you a beautiful dress just for our Dinner Date tonight!<span>OPEN THE BOX INFRONT OF YOU</span></p>
            <button onClick={nextStep}>Next</button>
        </div>
    );
}

export default Gift;
