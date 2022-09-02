import  styles from"./styles/LikedPets.module.scss";

const Heading : React.FC = ()=> {

    return(
        <>
        <div className={styles.headingContainer}>
            <img className={styles.profileImg} src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="profilePic" />
            <h3 className={styles.profileHeading}>My profile</h3>
        </div>
        </>
    );
}
  
export default Heading;