import React from 'react';
import { allianceRankData } from "../data/allianceRankData"
import PvpRankTable from './crafting/components/PvpRankTable';
import './crafting/components/table.css';

function PvP() {
    
    return (
        <div>
            <h1 className='header'>The Elder Scrolls: Online - PvP</h1>
            <section className='blurb'>
                <p>
                    PvP in The Elder Scrolls: Online is split into 3 factions. Aldmeri Dominion, Ebonheart Pact, and Daggerfall Covenant.
                    <br/>The following table show the Ranks within each alliance and how much Alliance Points(AP) you need to earn in total to move into the listed rank. 
                    <br/>Meaning to reach Grand Overlord Grade 2 you need to earn a whopping 64,680,000AP!
                </p>
                <p className='sub-blurb'>
                    Becoming Emporer is nothing easy! Multiple factors come into play to be crowned. You alliance has to sucessfully take a hold all 6 inner keeps that surround 
                    the Imperial City at the same time (Castle Alessia, Castle Roebeck, Fort Aleswell, Fort Ash, Blur Road Keep, and Chalman Keep) as well as also be the highest 
                    ranking member on your Alliance Leader board for the campaign. There is also the optional centre Outposts which are recommended to keep a fresh supply of
                    players able to move quickly around the map, and connecting as many keeps as possible to one another to allow you and your Alliance members to move around the 
                    map much more quickly.
                </p>
            </section>
            <section className='wrapper-main'>
                <PvpRankTable data={allianceRankData} />
            </section>
        </div>
    )
}

export default PvP;