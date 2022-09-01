import { useState } from "react";
import  styles from"./styles/LikedPets.module.scss";

const LikedPets: React.FC = () => {
    const [likedPets, setLikedPets] = useState([{
        id: 1,
        name: "Luna",
        age: "1 years",
        type: "dog",
        image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    },
    {
        id: 2, 
        name: "Garp",
        age: "3 years",
        type: "cat",
        image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    },
    {
        id: 3,
        name: "Bella",
        age: "1 years",
        type: "dog",
        image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    }
]);

    return (
      <>
        <div className="container">
           { likedPets.map(pet => (
                <div className={styles.petCard} key={pet.id}>
                    <img src={pet.image} alt={pet.name}  className={styles.petImg}/>
                    <div className="pet-info">
                        <div className={styles.petInfo}>
                            <h3 className={styles.petName}>{pet.name}</h3>
                            <p className={styles.peAge}>{pet.age}</p>
                        </div>
                        <p className={styles.petType}>{pet.type}</p>
                    </div>
                </div>
            ))}
        </div>
      </>
    )
  }
  
  export default LikedPets;
  