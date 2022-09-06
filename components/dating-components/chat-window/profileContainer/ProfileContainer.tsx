import React, { useState } from "react";
import { ProfileSwiper } from "./profileSwiper";
import styles from "./ProfileContainer.module.scss";

export type ManageCurrentView = {
  previous: Function;
  likePet: Function;
  dislikePet: Function;
};

interface isChatOpen {
  isChatOpen: boolean;
}

export interface RecommendedPet {
  id: number;
  name: string;
  age: string;
  type: string;
  gallery: string[];
  description: string;
}

export type RecommendedPets = {
  pets: RecommendedPet[];
};

export interface ManipulateMatchedPet {
  addNewPetToMatchedPets: Function;
  removePetFromMatchedPets: Function;
}

export const ProfileContainer = ({
  pets,
  addNewPetToMatchedPets,
  removePetFromMatchedPets,
  isChatOpen
}: RecommendedPets & ManipulateMatchedPet & isChatOpen) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  const nextPet = () => {
    const nextIndex = (currentIndex === pets.length - 1) ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  const previousPet = () => {
    const previousIndex = (currentIndex === 0) ? pets.length - 1 : currentIndex - 1;
    setCurrentIndex(previousIndex);
  };

  const { id, name, age, type, gallery, description } = pets[currentIndex];

  const likePet = () => {
    addNewPetToMatchedPets(id, name, age, type, gallery[0]);
    nextPet();
  };

  const dislikePet = () => {
    removePetFromMatchedPets(id);
    nextPet();
  };

  return (
    <>
      <div className={isChatOpen? styles.profileContainer: styles.profileContainerHiddenChat}>
        <ProfileSwiper
          id={id}
          name={name}
          age={age}
          type={type}
          gallery={gallery}
          description={description}
          dislikePet={dislikePet}
          previous={previousPet}
          likePet={likePet}
        />
      </div>
    </>
  );
};
