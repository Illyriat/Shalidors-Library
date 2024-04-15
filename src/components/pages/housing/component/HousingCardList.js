import React from 'react'
import HousingCard from './HousingCard';

function HousingCardList({housingcards}) {
    return(
        <div className='card-grid'>
            {housingcards.map(housingcard => {
                return <HousingCard housingcard={housingcard} key={housingcard.id} />
            })}
        </div>
    )
}

export default HousingCardList;