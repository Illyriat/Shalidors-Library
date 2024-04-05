// React imports
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


// Internal App imports
import NavBar from '../components/navbar/NavBar.js';

import Home from "../components/pages/Home.js";

import Builds from '../components/pages/builds/BuildsInfo.js';
import Tank from '../components/pages/builds/tank/Tank.js';
import Healer from '../components/pages/builds/healer/Healer.js';

import Fighters from '../components/pages/guilds/Fighters.js';
import MagesGuild from '../components/pages/guilds/Mages.js';
import TheUndaunted from '../components/pages/guilds/TheUndaunted.js';
import ThePsijicOrder from '../components/pages/guilds/ThePsijicOrder.js';

import PvP from '../components/pages/Pvp.js';

import Crafting101 from '../components/pages/crafting/Crafting101.js'
import Motifs from '../components/pages/crafting/Motifs.js';
import Alchemy from '../components/pages/crafting/Alchemy.js';
import Enchantment from '../components/pages/crafting/Enchantment.js';

import Antiquities from '../components/pages/antiquities/Antiquities.js';
import Leads from '../components/pages/antiquities/Leads.js';

import Housing from '../components/pages/Housing.js';

import EventBasics from '../components/pages/events/EventBasics.js';
import NewLife from '../components/pages/events/NewLife.js';
import WhiteStrakes from '../components/pages/events/WhiteStrakes.js';
import Jesters from '../components/pages/events/Jesters.js';
import Witches from '../components/pages/events/Witches.js';
import Jubilee from '../components/pages/events/Jubilee.js';
import Undaunted from '../components/pages/events/Undaunted.js';
import ZealsZenuthar from '../components/pages/events/ZealsZenuthar.js';

import Addons from '../components/pages/Addons.js';
import Contact from '../components/pages/Contact.js';
import Donate from '../components/pages/Donate.js';

import ErrorPage from '../components/pages/ErrorPage.js';


// Main Function
function MainContainer() {
    return(
        <Router>

            <NavBar className="nav-maincont"/>
            <Routes>
                <Route path='/' element={<Home />} />
                
                <Route path='buildsinfo' element={<Builds />} />
                <Route path='pve-tank' element={<Tank />} />
                <Route path='pve-healer' element={<Healer />} />

                <Route path='fighters-guild' element={<Fighters />} />
                <Route path='mages-guild' element={<MagesGuild />} />
                <Route path='undaunted' element={<TheUndaunted />} />
                <Route path='psijic-order' element={<ThePsijicOrder />} />

                <Route path='pvp-info' element={<PvP />} />

                <Route path='crafting-101' element={<Crafting101 />} />
                <Route path='motifs' element={<Motifs />} />
                <Route path='alchemy' element={<Alchemy />} />
                <Route path='enchantment' element={<Enchantment />} />

                <Route path='antiquities-basics' element={<Antiquities />} />
                <Route path='antiq-leads' element={<Leads />} />

                <Route path='housing' element={<Housing />} />

                <Route path='events' element={<EventBasics />} />
                <Route path='newlife' element={<NewLife />} />
                <Route path='whitestrakes-mayhem' element={<WhiteStrakes />} />
                <Route path='jesters-festival' element={<Jesters />} />
                <Route path='witches-festival' element={<Witches />} />
                <Route path='anniversary-jubilee' element={<Jubilee />} />
                <Route path='undaunted-celebration' element={<Undaunted />} />
                <Route path='zeal-of-zenithar' element={<ZealsZenuthar />} />

                <Route path='eso-addons' element={<Addons />} />
                <Route path='contact' element={<Contact />} />
                <Route path='donate' element={<Donate />} />

                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </Router>
    )
}

export default MainContainer