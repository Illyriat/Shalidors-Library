import React, {useState} from 'react'
import HousingCardList from './housing/component/HousingCardList';
import './housing/component/housing.css'

import { housingData } from '../data/housingData';

function Housing() {
    const [cards, setCards] = useState(housingData)

    const [query, setQuery] = useState("");
    const keys = ["homeName", "zoneLocation", "homeType"]

    const search = (housingData)=>{
        return housingData.filter(item=>
            keys.some((key) =>item[key].toLowerCase().includes(query)) ||
            keys.some((key) =>item[key].toUpperCase().includes(query))
        );
    }

    return(
        <div>
            <section className='card-grid'>
                <input
                    type="text"
                    placeholder="Search Houses"
                    className='search'
                    onChange={(e) => setQuery(e.target.value)}
                />
            </section>
            <HousingCardList housingcards={search(housingData)} />
        </div>
    )
}

export default Housing;