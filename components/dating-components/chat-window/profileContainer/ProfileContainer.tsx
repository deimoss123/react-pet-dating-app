import React, { useEffect, useState } from "react";
import { Owners, RecommendedPet, RecommendedPets } from "../../../../pages/recommendations";

const ProfileContainer= ({pets}:RecommendedPets) => {

  useEffect(()=>{
    console.log(pets)
  },[pets])

  return (
    <>
    <div>Hello World</div>
    </>
  );
};

export default ProfileContainer;
