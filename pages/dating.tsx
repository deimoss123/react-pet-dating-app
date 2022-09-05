import type { NextPage } from "next";
import { type } from "os";
import React, { useEffect, useState } from "react";
import ChatLayout, { MatchedPet } from "../components/dating-components/chat-window/ChatLayout";
import {
  ProfileContainer,
} from "../components/dating-components/chat-window/profileContainer/ProfileContainer";
import styles from "./styles/dating.module.scss"

const Dating: NextPage = () => {
  const [matchedPets, setMatchedPets] = useState([
    {
      id: 24,
      name: "Buna",
      age: "1 years",
      type: "Cat",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
  ]);

  const [recommendedPets, setRecommendedPets] = useState([
      {
        id: 1,
        name: "Zemene",
        age: "7 years",
        type: "cat",
        image: "/photos/zemene/zemene.jpg",
        gallery: ["/photos/zemene/zemene.jpg", "/photos/zemene/zemene-2.jpg", "/photos/zemene/zemene-3.jpg", "/photos/zemene/zemene-4.jpg"],
        description: "No thoughts, head empty, but pretty enough to make up for it. 💋 Will eat all of your lettuce.",
      },
      {
        id: 2,
        name: "Vinnis",
        age: "4 years",
        type: "dog",
        image:
          "/photos/vinnis/vinnis-2.jpg",
        gallery: ["/photos/vinnis/vinnis-1.jpg", "/photos/vinnis/vinnis-2.jpg"],
        description: "The fluffiest ball of destruction that will steal your heart and chew all your shoes.",
      },

      {
        id: 3,
        name: "Dore",
        age: "6 years",
        type: "dog",
        image: "/photos/dore/dore-1.png",
        gallery: ["/photos/dore/dore-1.png", "/photos/dore/dore-2.png", "/photos/dore/dore-3.png", "/photos/dore/dore-4.png", "/photos/dore/dore-5.png"],
        description: "I feel my very best when I'm outside. If my owners would let me, I would never come inside."
      },

      {
        id: 4,
        name: "Tesa",
        age: "5 years",
        type: "dog",
        image: "/photos/tesa/tesa-1.png",
        gallery: ["/photos/tesa/tesa-1.png", "/photos/tesa/tesa-2.png", "/photos/tesa/tesa-3.png", "/photos/tesa/tesa-4.png"],
        description: "I love my humans and I love helping them with house chores even more. I'm the best of the best and I will prove it!!!"
      },

      {
        id: 5,
        name:"Freija",
        age: "1 year",
        type: "cat",
        image: "/photos/freija/freija-1.png",
        gallery: ["/photos/freija/freija-1.png", "/photos/freija/freija-2.png", "/photos/freija/freija-3.png", "/photos/freija/freija-4.png", "/photos/freija/freija-5.png"],
        description: "It's my turn with the braincell today !! 👀"
      },

      {
        id: 6,
        name: "Ella",
        age: "4 years",
        type: "dog",
        image: "/photos/ella/ella-1.png",
        gallery: ["/photos/ella/ella-1.png", "/photos/ella/ella-2.png", "/photos/ella/ella-3.png", "/photos/ella/ella-4.png", "/photos/ella/ella-5.png"],
        description: "100% Mischievous, 100% bubbly, 200% playful."
      },

      {
        id: 7,
        name: "Tulle",
        age: "4 years",
        type: "dog",
        image: "/photos/tulle/tulle-1.png",
        gallery: ["/photos/tulle/tulle-1.png", "/photos/tulle/tulle-2.png", "/photos/tulle/tulle-3.png", "/photos/tulle/tulle-4.png", "/photos/tulle/tulle-5.png"],
        description: "Seriously pretty gal. 💅 My hobbies: being beautiful and getting praised. "
      }
    ],
  );

  const checkIfPetInArray= (matchedPets: { id: number; name: string; age: string; type: string; image: string; }[], id: number) => {
    return !(matchedPets.filter(object => object.id === id).length > 0);
  }
  

  const addNewPetToMatchedPets = (id: number, name: string, age: string, type: string, image: string) => {
    if (checkIfPetInArray(matchedPets, id)){
      const newArray = [...matchedPets, {id:id, name:name, age:age, type:type, image:image}]
      setMatchedPets(newArray)
    }
  }

  return (
    <>
      <div className={styles.datingWrapper}>
        <ChatLayout matchedPets={matchedPets} />
        <ProfileContainer pets={recommendedPets} addNewPetToMatchedPets={addNewPetToMatchedPets} />
      </div>
    </>
  );
};

export default Dating;

