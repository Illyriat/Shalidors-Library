import React, { useState } from 'react';
import { motifData } from "../../data/motifData";
import MotifTable from './components/MotifTable';
import '../crafting/components/table.css';


function Motifs() {
    const [query, setQuery] = useState("");

    const keys = ["motifName", "quality", "skillLevel"]

    const search = (motifData)=>{
        return motifData.filter(item=>
            keys.some((key) =>item[key].toLowerCase().includes(query)) ||
            keys.some((key) =>item[key].toUpperCase().includes(query))
        );
    }

    return(
        <div>
            <section className='wrapper-main'>
                <input 
                    type="text" 
                    placeholder='search motifs' 
                    className='search' 
                    onChange={(e) => setQuery(e.target.value)}
                />

                <h3 className='sub-blurb'>The following table is a list of collectable Motif's, the style material to craft, and Motif Chapter loot location.</h3>

                <MotifTable data={search(motifData)} />
                </section>    
        </div>

    )
}

export default Motifs;