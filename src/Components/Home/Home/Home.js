import React from "react";
import Achievement from "../Achievements/Achievement";
import DedicatedTeam from "../DedicatedTeam/DedicatedTeam";
import Footer from "../Footer/Footer";
import Header from "../Header/NavSection/Header";
import RunningP from "../RunningProjects/RunningP";
import Search from "../Search/Search";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="combinedBackground">
        <Services></Services>
        <RunningP></RunningP>
        <Achievement></Achievement>
      </div>

      <DedicatedTeam></DedicatedTeam>
      <Search></Search>
      <Footer></Footer>
    </div>
  );
};

export default Home;
