import Image from "next/image";
import { Dispatch, FC, SetStateAction, useState, FormEvent } from "react";
import styles from "./SignupForm.module.scss";

interface Props {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

const SignupForm: FC<Props> = ({ setModalOpen }) => {
  
  const [enteredInput, setEnteredInput] = useState({
    emailInput: "",
    usernameInput: "",
    passwordInput: "",
  });

  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredInput({ ...enteredInput, emailInput: e.target.value });
  };

  const usernameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredInput({ ...enteredInput, usernameInput: e.target.value });
  };

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredInput({ ...enteredInput, passwordInput: e.target.value });
  };

  const [inputIsValid, setInputIsValid] = useState({
    emailIsValid: true,
    usernameIsValid: true,
    passwordIsValid: true,
  });

  const checkValidity = () => {
    if (!(enteredInput.emailInput.includes("@"))) {
      setInputIsValid({
        ...inputIsValid,
        emailIsValid: false,
      });
    }

    if (enteredInput.usernameInput.trim() == "") {
      setInputIsValid({
        ...inputIsValid,
        usernameIsValid: false,
      });
    }

    if (enteredInput.passwordInput.trim() == "") {
      setInputIsValid({
        ...inputIsValid,
        passwordIsValid: false,
      });
    }
  };

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    checkValidity();
    console.log(inputIsValid);
    console.log(enteredInput);
    setEnteredInput({
      emailInput: "",
      usernameInput: "",
      passwordInput: "",
    });
  }

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <form className={styles.SignupForm} onSubmit={onSubmit}>
      <h3>Sign Up</h3>
      <button onClick={closeModal} className={styles.closeBtn}>
        <Image src="/icons/x-mark.svg" layout="fill" alt="close modal button" />
      </button>
      <div className={styles.inputFields}>
        <label htmlFor="formEmail">Email</label>
        <input
          onChange={emailChangeHandler}
          className={`${styles["textInput"]} ${
            !inputIsValid.emailIsValid ? styles["error"] : ""
          }`}
          type="email"
          id="formEmail"
          value={enteredInput.emailInput}
        />
        <label htmlFor="formUsername">Username</label>
        <input
          onChange={usernameChangeHandler}
          className={`${styles["textInput"]} ${
            !inputIsValid.usernameIsValid ? styles["error"] : ""
          }`}
          type="text"
          id="formUsername"
          value={enteredInput.usernameInput}
        />
        <label htmlFor="formPassword">Password</label>
        <input
          onChange={passwordChangeHandler}
          className={`${styles["textInput"]} ${
            !inputIsValid.passwordIsValid ? styles["error"] : ""
          }`}
          type="password"
          id="formPassword"
          value={enteredInput.passwordInput}
        />
        <div className={styles.selectWrapper}>
          <div className={styles.genderWrapper}>
            <h2>I&apos;m a:</h2>
            <div>
              <input value="cat" type="radio" id="gender-cat" name="gender" />
              <label htmlFor="gender-cat">Cat</label>
            </div>
            <div>
              <input value="dog" type="radio" id="gender-dog" name="gender" />
              <label htmlFor="gender-dog">Dog</label>
            </div>
          </div>
          <div className={styles.interestsWrapper}>
            <h2>I&apos;m interested in:</h2>
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
        <button type="submit" className={styles.signupBtn}>
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
