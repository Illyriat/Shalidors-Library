import React, {useState} from 'react'
import HousingCardList from './housing/component/HousingCardList';
import './housing/component/housing.css'

import { housingData } from '../data/housingData';

function Housing() {
    const [cards, setCards] = useState(housingData)
    return(
        <HousingCardList housingcards={cards} />
    )
}

export default Housing;