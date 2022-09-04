import { LeftArrow } from "../../../../public/icons/svg-icons";
import  styles from"./styles/LikedPets.module.scss";

interface isOpen {
    setIsOpen: Function
}

const Heading : React.FC<isOpen> = ({setIsOpen})=> {

    return(
        <>
        <div className={styles.headingContainer}>
            <img className={styles.profileImg} src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="profilePic" />
            <h3 className={styles.profileHeading}>My profile</h3>
            <div className={styles.buttonWrapper}>
            <button onClick={()=>setIsOpen()}><LeftArrow/></button>
            </div>
        </div>
        </>
    );
}
  
export default Heading;