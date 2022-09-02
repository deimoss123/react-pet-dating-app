import React from "react";
import { RecommendedPet, RecommendedPets } from "../../../../../pages/dating";
import { PetBio } from "../profileSwiper";

const SwiperBio = ({name, age, type}: PetBio) => {
  return (
    <>
      <div style={{"userSelect": "none"}}>{name}</div>
      <div style={{"userSelect": "none"}}>{age}</div>
      <div style={{"userSelect": "none"}}>{type}</div>
    </>
  );
};

export default SwiperBio;
