import React from "react";
import { RecommendedPet, RecommendedPets } from "../../../../../pages/recommendations";
import { PetBio } from "../profileSwiper";

const SwiperBio = ({name, age, type}: PetBio) => {
  return (
    <>
      <div>{name}</div>
      <div>{age}</div>
      <div>{type}</div>
    </>
  );
};

export default SwiperBio;
