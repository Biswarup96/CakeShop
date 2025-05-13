import React from "react";
import Header from "../Components/Header/Header";
import Catagories from "../Components/Catagories/Catagories";
import Cakes from "../Components/Cakes/Cakes";
import Valentie from "../Components/Valentie/Valentie";
import VisitandEx from "../Components/VisitAndEx/VisitandEx";

const Home = () => {
  return (
    <>
      <Header />
      <Catagories />
      <Cakes />
      <Valentie/>
      <VisitandEx/>
    </>
  );
};

export default Home;
