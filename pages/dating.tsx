import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import ChatLayout from "../components/dating-components/chat-window/ChatLayout";
import { ProfileContainer } from "../components/dating-components/chat-window/profileContainer/ProfileContainer";
import styles from "./styles/dating.module.scss";

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

  const [isChatOpen, setIsChatOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 520) {
        setIsChatOpen(false);
      } else if (window.innerWidth >= 520) {
        setIsChatOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  },[]);

  const [recommendedPets, setRecommendedPets] = useState([
    {
      id: 1,
      name: "Zemene",
      age: "7 years",
      type: "cat",
      gallery: [
        "/photos/zemene/zemene.jpg",
        "/photos/zemene/zemene-2.jpg",
        "/photos/zemene/zemene-3.jpg",
        "/photos/zemene/zemene-4.jpg",
      ],
      description:
        "No thoughts, head empty, but pretty enough to make up for it. 💋 Will eat all of your lettuce.",
    },

    {
      id: 2,
      name: "Vinnis",
      age: "4 years",
      type: "dog",
      gallery: ["/photos/vinnis/vinnis-1.jpg", "/photos/vinnis/vinnis-2.jpg"],
      description:
        "The fluffiest ball of destruction that will steal your heart and chew all your shoes.",
    },

    {
      id: 6,
      name: "Freija",
      age: "1 year",
      type: "cat",
      gallery: [
        "/photos/freija/freija-1.png",
        "/photos/freija/freija-2.png",
        "/photos/freija/freija-3.png",
        "/photos/freija/freija-4.png",
        "/photos/freija/freija-5.png",
      ],
      description: "It's my turn with the braincell today !! 👀",
    },

    {
      id: 3,
      name: "Dore",
      age: "6 years",
      type: "dog",
      gallery: [
        "/photos/dore/dore-1.png",
        "/photos/dore/dore-2.png",
        "/photos/dore/dore-3.png",
        "/photos/dore/dore-4.png",
        "/photos/dore/dore-5.png",
      ],
      description:
        "I feel my very best when I'm outside. If my owners would let me, I would never come inside.",
    },

    {
      id: 4,
      name: "Lokum",
      age: "2.7 years",
      type: "cat",
      gallery: [
        "/photos/lokum/lokum-1.jpg",
        "/photos/lokum/lokum-2.jpg",
        "/photos/lokum/lokum-3.jpg",
      ],
      description:
        "Searching for a cat with whom I would want to spend all nine lives together. <br/> I like food and treats, have been jailed for a day for stealing pizza from my human slave. <br/> <br/> Hobbies: <br/> Eating pizza <br/> Stare all day out the window <br/> Making biscuits",
    },

    {
      id: 5,
      name: "Tesa",
      age: "5 years",
      type: "dog",
      gallery: [
        "/photos/tesa/tesa-1.png",
        "/photos/tesa/tesa-2.png",
        "/photos/tesa/tesa-3.png",
        "/photos/tesa/tesa-4.png",
      ],
      description:
        "I love my humans and I love helping them with house chores even more. I'm the best of the best and I will prove it!!!",
    },

    {
      id: 9,
      name: "Harijs",
      age: "1 years",
      type: "cat",
      gallery: [
        "/photos/harijs/harijs-1.jpg",
        "/photos/harijs/harijs-2.jpg",
        "/photos/harijs/harijs-3.jpg",
        "/photos/harijs/harijs-4.jpg",
      ],
      description:
        "If you like to play fetch and showing dogs where their place is, then we will get along. ",
    },

    {
      id: 7,
      name: "Ella",
      age: "4 years",
      type: "dog",
      gallery: [
        "/photos/ella/ella-1.png",
        "/photos/ella/ella-2.png",
        "/photos/ella/ella-3.png",
        "/photos/ella/ella-4.png",
        "/photos/ella/ella-5.png",
      ],
      description: "50% Mischievous, 50% bubbly, 100% playful.",
    },

    {
      id: 8,
      name: "Tulle",
      age: "4 years",
      type: "dog",
      gallery: [
        "/photos/tulle/tulle-1.png",
        "/photos/tulle/tulle-2.png",
        "/photos/tulle/tulle-3.png",
        "/photos/tulle/tulle-4.png",
        "/photos/tulle/tulle-5.png",
      ],
      description:
        "Seriously pretty gal. 💅 <br/> My hobbies: being beautiful and getting praised. ",
    },
  
  ]);

  const isPetNotInArray = (
    matchedPets: {
      id: number;
      name: string;
      age: string;
      type: string;
      image: string;
    }[],
    id: number
  ) => {
    return (matchedPets.filter((object) => object.id === id).length === 0);
  };

  const addNewPetToMatchedPets = (
    id: number,
    name: string,
    age: string,
    type: string,
    image: string
  ) => {
    if (isPetNotInArray(matchedPets, id)) {
      const newArray = [
        ...matchedPets,
        { id: id, name: name, age: age, type: type, image: image },
      ];
      setMatchedPets(newArray);
    }
  };

  const removePetFromMatchedPets = (id: number) => {
    const filteredArray = matchedPets.filter((pet) => pet.id !== id);
    setMatchedPets(filteredArray);
  };

  return (
    <>
      <div className={styles.datingWrapper}>
        <ChatLayout matchedPets={matchedPets} isChatOpen={isChatOpen} setIsChatOpen={setIsChatOpen} />
        <ProfileContainer
          isChatOpen={isChatOpen}
          pets={recommendedPets}
          addNewPetToMatchedPets={addNewPetToMatchedPets}
          removePetFromMatchedPets={removePetFromMatchedPets}
        />
      </div>
    </>
  );
};

export default Dating;
