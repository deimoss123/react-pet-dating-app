import React, { useEffect } from "react";
import { RecommendedPet } from "../../../../../pages/recommendations";
import { ManageCurrentPetFunctions } from "../ProfileContainer";
import ProfileInfo from "../profileInfo/ProfileInfo";
import SwiperBio from "../swiperBio/SwiperBio";
import SwiperButtons from "../swiperButtons/SwiperButtons";

export interface PetBio {
  name: string;
  age: string;
  type: string;
}

export interface PetInfo {
  info: string;
}

const ProfileSwiper = ({
  id,
  name,
  age,
  type,
  image,
  gallery,
  description,
  nextPet,
  previousPet,
}: RecommendedPet & ManageCurrentPetFunctions) => {
  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <>
      <SwiperBio name={name} age={age} type={type} />
      <ProfileInfo info={description}/>
      <div></div>
      <SwiperButtons nextPet={nextPet} previousPet={previousPet} />

    </>
  );
};

export default ProfileSwiper;
