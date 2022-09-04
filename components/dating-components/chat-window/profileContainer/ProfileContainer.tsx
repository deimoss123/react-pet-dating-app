import React, { useState } from "react";
import {ProfileSwiper} from "./profileSwiper";
import styles from "./ProfileContainer.module.scss"

export type ManageCurrentView = {
  next: Function,
  previous: Function,
  likePet: Function,
}


export interface RecommendedPet {
  id: number;
  name: string;
  age: string;
  type: string;
  image: string;
  gallery: string[];
  description: string;
}


export type RecommendedPets = {
  pets: RecommendedPet[];
}

export interface AddPetToMatched {
  addNewPetToMatchedPets: Function;
}

export const ProfileContainer = ({ pets, addNewPetToMatchedPets }: RecommendedPets & AddPetToMatched) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPet, setCurrentPet] = useState(pets[currentIndex]);

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

  const likePet = () => {
    addNewPetToMatchedPets(id, name, age, type, gallery[0])
    nextPet();
  } 




  return (
    <>
    <div className={styles.profileContainer}>
      <ProfileSwiper
        id={id}
        name={name}
        age={age}
        type={type}
        image={image}
        gallery={gallery}
        description={description} 
        next={nextPet} 
        previous={(previousPet)}
        likePet={likePet}     />
        </div>
    </>
  );
};

