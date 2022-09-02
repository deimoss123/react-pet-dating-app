import React, { useEffect } from "react";
import { RecommendedPets } from "../../../../../pages/recommendations";

const SwiperBio= ({pets}:RecommendedPets) => {

  useEffect(()=>{
    console.log(pets)
  },[pets])

  return (
    <>
    <div>Hello World</div>
    </>
  );
};

export default SwiperBio;
