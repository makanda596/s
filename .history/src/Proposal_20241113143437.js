import React, { useState } from "react";
import './App.css';

function Proposal() {
    const [showFlowers, setShowFlowers] = useState(false);

    const handleYesClick = () => {
        setShowFlowers(true);
    };

    return (
        <div className="container" style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>MY LOVE</h1>
            <h3>
                From the moment you came into my life, you’ve been my happiness, my
                peace, and my inspiration. You make everything brighter just by being
                you, and I feel so lucky to love and be loved by someone as amazing as
                you. I want nothing more than to keep building this journey with you,
                creating memories, growing together, and loving you more each day. So,
                I’m asking you—will you be my girlfriend again, my love? Let’s keep
                making life beautiful together.
            </h3>
            <h2>Will you be my girlfriend again, babe? ❤️</h2>
            <div>
                <button onClick={handleYesClick} className="yes-button">Yes</button>
                <button className="no-button">No</button>
            </div>

            {showFlowers && (
                <div className="flower-container">
                    <img src="flower1.png" alt="Flower 1" className="flower" />
                    <img src="flower2.png" alt="Flower 2" className="flower" />
                    <img src="flower3.png" alt="Flower 3" className="flower" />
                    {/* Add more flower images as desired */}
                </div>
            )}
        </div>
    );
}

export default Proposal;
