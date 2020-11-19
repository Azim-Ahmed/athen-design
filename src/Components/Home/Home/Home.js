import React from 'react';
import Achievement from '../Achievements/Achievement';
import DedicatedTeam from '../DedicatedTeam/DedicatedTeam';
import Footer from '../Footer/Footer';
import Header from '../Header/NavSection/Header';
import RunningP from '../RunningProjects/RunningP';
import Search from '../Search/Search';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <RunningP></RunningP>
            <Achievement></Achievement>
            <DedicatedTeam></DedicatedTeam>
            <Search></Search>
            <Footer></Footer>
        </div>
    );
};

export default Home;