import React, { useState } from 'react';

function HousingCard({ housingcard }) {
    const [flip, setFlip] = useState(false);

    const handleMouseEnter = () => {
        setFlip(true);
    };

    const handleMouseLeave = () => {
        setFlip(false);
    };

    return (
        <div
            className={`card ${flip ? 'flip' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {flip ? (
                <div className='back'>
                    <p>Zone: {housingcard.zoneLocation}</p>
                    <p>City: {housingcard.cityLocation}</p>
                    <p>Type: {housingcard.homeType}</p>
                    <p>Furnishing: {housingcard.furnishingSize}</p>
                    <p>Special: {housingcard.specialFurnishing}</p>
                    <p>Collectable: {housingcard.collectableFurnishing}</p>
                    <p>Special Collectables: {housingcard.specialCollectables}</p>
                    <p>Gold: {housingcard.goldCost}</p>
                    <p>Crowns: {housingcard.crownCost}</p>
                    <p>Player Population {housingcard.playerCapacity}</p>
                </div>
            ) : (
                <div className='front'>
                    <p>{housingcard.homeName}</p>
                    <img src={`${process.env.PUBLIC_URL}/${housingcard.img}`} alt={housingcard.homeName} />                </div>
            )}
        </div>
    );
}

export default HousingCard;