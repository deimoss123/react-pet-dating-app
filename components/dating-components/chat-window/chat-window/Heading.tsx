import styles from "./styles/ChatWindow.module.scss";

interface Props {
    currentChat: Number;
    likedPets: {
        id: number;
        name: string;
        age: string;
        type: string;
        image: string;
    }[];
}

const Heading: React.FC<Props> = ({likedPets, currentChat})  => {

    return (
        <>
        <div className={styles.userContainer}>
            <img src= {likedPets?.find(pet => pet.id === currentChat)?.image} alt= {likedPets?.find(pet => pet.id === currentChat)?.name} className={styles.petImg}/>
            <h3 className={styles.petName}>{likedPets?.find(pet => pet.id === currentChat)?.name}</h3>
        </div>
        </>
    );
}

export default Heading;