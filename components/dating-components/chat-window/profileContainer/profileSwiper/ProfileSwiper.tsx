import React, { useEffect } from "react";
import { RecommendedPets } from "../../../../../pages/recommendations";

const ProfileSwiper= ({pets}:RecommendedPets) => {

  useEffect(()=>{
    console.log(pets)
  },[pets])

  return (
    <>
    <div>Hello World</div>
    </>
  );
};

export default ProfileSwiper;
