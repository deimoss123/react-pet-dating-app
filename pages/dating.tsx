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
      type: "Dog",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
  ]);

  const [recommendedPets, setRecommendedPets] = useState([
      {
        id: 1,
        name: "Luna",
        age: "1 years",
        type: "dog",
        image:
          "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        gallery: ["/photos/ami.jpeg", "/photos/harrisons.jpg"],
        description: "I am a dog, Moooooooooooooooooooooooooooooon",
      },
      {
        id: 2,
        name: "Garp",
        age: "3 years",
        type: "cat",
        image:
          "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        gallery: ["/photos/arcijs.jpg", "/photos/zemene.jpg"],
        description: "I am a cat, my name is Garp",
      },
      {
        id: 3,
        name: "Bella",
        age: "1 years",
        type: "dog",
        image:
          "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        gallery: ["/photos/freija.png", "/photos/harrisons.jpg"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt metus et nunc sodales, ac tristique massa sagittis. Sed at nisi nisi. Vivamus ullamcorper cursus elit, sit amet consequat sapien pellentesque vel. Pellentesque lobortis erat quam. Fusce nec nibh porta lectus rhoncus iaculis. Sed rutrum tortor sed metus maximus, quis luctus augue tempor. Sed urna lacus, tristique eget malesuada in, porttitor eu purus. Vivamus in rutrum sem. Duis finibus odio id eros ullamcorper suscipit. Nunc id vestibulum lacus. In nec sapien augue. Sed varius justo urna, vel scelerisque lacus aliquet eget. Aliquam erat volutpat. In quis cursus massa. Ut eget arcu justo. Donec dui eros, euismod at urna ac, lacinia laoreet ligula. Morbi iaculis lorem dui, posuere viverra mi elementum luctus. Cras scelerisque at nisl eu ultricies. Aliquam in purus metus. Vestibulum varius maximus massa, eu fermentum ipsum malesuada pretium. Donec semper dictum aliquam. Proin a viverra sem, vel dignissim velit. Mauris a mattis nibh. Praesent molestie tortor velit, ut fermentum diam placerat et. Donec elementum viverra velit ac hendrerit.",
      },
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

