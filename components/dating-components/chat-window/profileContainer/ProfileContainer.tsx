import React, { useEffect, useState } from "react";
import {ProfileSwiper} from "./profileSwiper";

export type ManageCurrentView= {
  next: Function,
  previous: Function
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

export const ProfileContainer = ({ pets }: RecommendedPets) => {
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
    <div style={{display:"flex", alignContent: "center", justifyContent:"center", width:800}}>
      <ProfileSwiper
        id={id}
        name={name}
        age={age}
        type={type}
        image={image}
        gallery={gallery}
        description={description} 
        next={nextPet} 
        previous={previousPet}      />
        </div>
    </>
  );
};

