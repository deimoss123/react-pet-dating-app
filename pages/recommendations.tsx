import type { NextPage } from "next";
import { type } from "os";
import React, { useState } from "react";
import ProfileContainer from "../components/dating-components/chat-window/profileContainer/ProfileContainer";

const Recommendations: NextPage = () => {
  
  const [recommendedPets, setRecommendedPets] = useState<RecommendedPets>({
    pets: [
      {
        id: 1,
        name: "Luna",
        age: "1 years",
        type: "dog",
        image:
          "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        gallery: [],
        description: "I am a dog, Moooooooooooooooooooooooooooooon",
      },
      {
        id: 2,
        name: "Garp",
        age: "3 years",
        type: "cat",
        image:
          "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        gallery: [],
        description:"I am a cat, my name is Garp"
      },
      {
        id: 3,
        name: "Bella",
        age: "1 years",
        type: "dog",
        image:
          "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        gallery: [],
        description: "I am a dog, my name is Bella"
      },
    ],
  });

  return (
    <>
      <ProfileContainer pets={recommendedPets.pets} />
    </>
  );
};

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

export type Owners = {
  owner: boolean, 
}

export default Recommendations;
