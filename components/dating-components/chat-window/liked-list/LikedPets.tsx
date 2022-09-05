import { SetStateAction, useEffect, useState } from "react";
import  styles from"./styles/LikedPets.module.scss";
import Heading from "./Heading";

interface Props {
    setCurrentChat: Function;
    currentChat: Number;
    setIsOpen: Function;
    likedPets: {
        id: number;
        name: string;
        age: string;
        type: string;
        image: string;
    }[];
}

const LikedPets : React.FC<Props> = ({ setCurrentChat, currentChat, likedPets, setIsOpen })=> {

const handleClick = async(id: Number) => {
    if(currentChat === 0){
        await setCurrentChat(id);
        console.log(currentChat);
    }else{
        await setCurrentChat(0);
        console.log(currentChat);
    }
}

    return (
      <>
        <div className={styles.container}>
            <Heading setIsOpen={setIsOpen}/>
            <h3 className={styles.msgHeading}>
                Messages
            </h3>
            <div className={styles.petCardContainer}>
                { likedPets?.map(pet => (
                    <div className={styles.petCard} key={pet.id} onClick={() => handleClick(pet.id)}>
                        <img src={pet.image} alt={pet.name}  className={styles.petImg}/>
                        <div className={styles.petStats}>
                            <div className={styles.petInfo}>
                                <h3 className={styles.petName}>{pet.name}</h3>
                                <p className={styles.peAge}>{pet.age}</p>
                            </div>
                            <p className={styles.petType}>New match say hello! {pet.type}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </>
    )
  }
  
  export default LikedPets;
  