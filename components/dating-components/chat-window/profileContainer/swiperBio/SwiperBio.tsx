import React from "react";
import { PetBio } from "../profileSwiper/ProfileSwiper";

export const SwiperBio = ({name, age, type}: PetBio) => {
  return (
    <>
      <div style={{"userSelect": "none"}}>{name}</div>
      <div style={{"userSelect": "none"}}>{age}</div>
      <div style={{"userSelect": "none"}}>{type}</div>
    </>
  );
};
