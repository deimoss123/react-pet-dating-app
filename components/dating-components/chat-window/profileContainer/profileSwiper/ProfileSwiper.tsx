import React, { useEffect } from "react";
import { RecommendedPet} from "../../../../../pages/recommendations";
import { ManageCurrentPetFunctions } from "../ProfileContainer";

const ProfileSwiper= ({id, name, age, type, image, gallery, description, nextPet, previousPet}:RecommendedPet & ManageCurrentPetFunctions) => {




  useEffect(()=>{
    console.log(name)
  },[name])

  return (
    <>
    <div>{name}</div>
    <button onClick={()=>nextPet()}>+</button>
    <button onClick={()=>previousPet()}>-</button>
    </>
  );
};

export default ProfileSwiper;
