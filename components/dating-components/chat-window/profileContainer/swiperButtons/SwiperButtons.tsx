import React, { useEffect, useState } from "react";
import { RecommendedPets } from "../../../../../pages/recommendations";

const SwiperButtons= ({pets}:RecommendedPets) => {

  useEffect(()=>{
    console.log(pets)
  },[pets])

  return (
    <>
    <div>Hello World</div>
    </>
  );
};

export default SwiperButtons;
