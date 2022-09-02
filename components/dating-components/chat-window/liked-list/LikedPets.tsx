import { SetStateAction, useState } from "react";
import  styles from"./styles/LikedPets.module.scss";
import Heading from "./Heading";

interface Props {
    setCurrentChat: Function;
    currentChat: Number;
    likedPets: {
        id: number;
        name: string;
        age: string;
        type: string;
        image: string;
    }[];
}

const LikedPets : React.FC<Props> = ({ setCurrentChat, currentChat, likedPets })=> {

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
            <Heading />
            <h3 className={styles.msgHeading}>
                Messages
            </h3>
           { likedPets.map(pet => (
                <div className={styles.petCard} key={pet.id} onClick={() => handleClick(pet.id)}>
                    <img src={pet.image} alt={pet.name}  className={styles.petImg}/>
                    <div className="pet-info">
                        <div className={styles.petInfo}>
                            <h3 className={styles.petName}>{pet.name}</h3>
                            <p className={styles.peAge}>{pet.age}</p>
                        </div>
                        <p className={styles.petType}>New match say hello! {pet.type}</p>
                    </div>
                </div>
            ))}
        </div>
      </>
    )
  }
  
  export default LikedPets;
  