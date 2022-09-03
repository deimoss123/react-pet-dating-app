import type { NextPage } from "next";
import { type } from "os";
import React, { useState } from "react";
import ChatLayout from "../components/dating-components/chat-window/ChatLayout";
import { ProfileContainer, RecommendedPets } from "../components/dating-components/chat-window/profileContainer/ProfileContainer";

const Dating: NextPage = () => {
  
  const [recommendedPets, setRecommendedPets] = useState<RecommendedPets>({
    pets: [
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
        description:"I am a cat, my name is Garp"
      },
      {
        id: 3,
        name: "Bella",
        age: "1 years",
        type: "dog",
        image:
          "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        gallery: ["/photos/freija.png", "/photos/harrisons.jpg"],
        description: "I am a dog, my name is Bella"
      },
    ],
  });

  return (
    <>
    <div style={{display:"flex"}}>
      <ChatLayout/>
      <ProfileContainer pets={recommendedPets.pets} />
    </div>
      
    </>
  );
};


export default Dating;
