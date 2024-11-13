import React from 'react';

function Home({ nextStep }) {
    return (
        <div className="container" style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Hey babe 💖</h1>
            <p>I have a surprise for you! Click 'Continue' to see it.</p>
            <button onClick={nextStep}>Continue</button>
        </div>
    );
}

export default Home;
