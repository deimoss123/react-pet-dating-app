import React, { useEffect } from "react";
import { RecommendedPet, RecommendedPets } from "../../../../../pages/recommendations";

const ProfileSwiper= ({id, name, age, type, image, gallery, description}:RecommendedPet) => {


  useEffect(()=>{
    console.log(name)
  },[name])

  return (
    <>
    <div>Hello World</div>
    </>
  );
};

export default ProfileSwiper;
