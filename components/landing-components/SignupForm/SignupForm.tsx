import Link from "next/link";
import { Dispatch, FC, SetStateAction, SyntheticEvent } from "react";
import styles from "./SignupForm.module.scss";

interface Props {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

const SignupForm: FC<Props> = ({ setModalOpen }) => {
  function onSubmit(e: SyntheticEvent) {
    e.preventDefault();
    setModalOpen(false);
  }

  return (
    <form className={styles.SignupForm} onSubmit={onSubmit}>
      <h2>Sign Up</h2>
      <div className={styles.inputFields}>
        <label htmlFor="formEmail">Email</label>
        <input className={styles.textInput} type="email" id="formEmail" />
        <label htmlFor="formUsername">Username</label>
        <input className={styles.textInput} type="text" id="formUsername" />
        <label htmlFor="formPassword">Password</label>
        <input className={styles.textInput} type="password" id="formPassword" />
        <div className={styles.selectWrapper}>
          <div className={styles.genderWrapper}>
            <h3>I&apos;m a:</h3>
            <div>
              <input type="radio" id="gender-cat" name="gender" />
              <label htmlFor="gender-cat">Cat</label>
            </div>
            <div>
              <input type="radio" id="gender-dog" name="gender" />
              <label htmlFor="gender-dog">Dog</label>
            </div>
          </div>
          <div className={styles.interestsWrapper}>
            <h3>I&apos;m interested in:</h3>
            <div>
              <input type="checkbox" id="check-cat" />
              <label htmlFor="check-cat">Cats</label>
            </div>
            <div>
              <input type="checkbox" id="check-dog" />
              <label htmlFor="check-dog">Dogs</label>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.btnRow}>
        <button className={styles.cancelBtn}>Cancel</button>
        <Link href="/dating">
          <a className={styles.signupBtn}>Sign Up</a>
        </Link>
      </div>
    </form>
  );
};

export default SignupForm;
