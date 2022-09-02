import React, { useEffect, useState } from "react";
import {
  Owners,
  RecommendedPet,
  RecommendedPets,
} from "../../../../pages/recommendations";
import ProfileSwiper from "./profileSwiper/ProfileSwiper";

export type ManageCurrentPetFunctions= {
  nextPet: Function,
  previousPet: Function
}

const ProfileContainer = ({ pets }: RecommendedPets) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPet, setCurrentPet] = useState(pets[currentIndex]);

  useEffect(() => {
    console.log(pets);
  }, [pets]);

  const nextPet = () => {
    const nextIndex = currentIndex === pets.length - 1 ? 0 : currentIndex + 1;
    const nextPet = pets[nextIndex];
    setCurrentPet(nextPet);
    setCurrentIndex(nextIndex);
  };

  const previousPet = () => {
    const previousIndex =
      currentIndex === 0 ? pets.length - 1 : currentIndex - 1;
    const previousPet = pets[previousIndex];
    setCurrentPet(previousPet);
    setCurrentIndex(previousIndex);
  };

  const { id, name, age, type, image, gallery, description } = currentPet;



  return (
    <>
      <ProfileSwiper
        id={id}
        name={name}
        age={age}
        type={type}
        image={image}
        gallery={gallery}
        description={description} 
        nextPet={nextPet} 
        previousPet={previousPet}      />
    </>
  );
};

export default ProfileContainer;
