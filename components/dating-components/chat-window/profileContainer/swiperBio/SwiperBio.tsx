import React, { useEffect, useState } from "react";
import { Owners, RecommendedPet, RecommendedPets } from "../../../../pages/SwiperBio";

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
