import Image from "next/image";
import {
  Dispatch,
  FC,
  SetStateAction,
  useState,
  FormEvent,
  useEffect,
} from "react";
import styles from "./SignupForm.module.scss";
import Link from "next/link";

interface Props {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

const SignupForm: FC<Props> = ({ setModalOpen }) => {
  const [enteredInput, setEnteredInput] = useState({
    emailInput: "",
    usernameInput: "",
    passwordInput: "",
  });

  const [inputIsValid, setInputIsValid] = useState({
    emailIsValid: true,
    usernameIsValid: true,
    passwordIsValid: true,
  });

  const [genderCheckBoxCheck, setGenderCheckBoxCheck] = useState(false);
  const [interestsCheckBoxCheck, setInterestsCheckBoxCheck] = useState(false);

  const [formisValid, setFormIsValid] = useState(false);

  useEffect(() => {
    if (
      inputIsValid.emailIsValid &&
      inputIsValid.passwordIsValid &&
      inputIsValid.usernameIsValid &&
      genderCheckBoxCheck &&
      interestsCheckBoxCheck
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [
    inputIsValid.emailIsValid,
    inputIsValid.usernameIsValid,
    inputIsValid.passwordIsValid,
    genderCheckBoxCheck,
    interestsCheckBoxCheck
  ]);

  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredInput({ ...enteredInput, emailInput: e.target.value });
  };

  const usernameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredInput({ ...enteredInput, usernameInput: e.target.value });
  };

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredInput({ ...enteredInput, passwordInput: e.target.value });
  };

  const genderCheckBoxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setGenderCheckBoxCheck(true);
    }
  };

  const interestsCheckBoxHandlerCat = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setInterestsCheckBoxCheck(true);
    } else {
      setInterestsCheckBoxCheck(false);
    }
  }

  const interestsCheckBoxHandlerDog = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setInterestsCheckBoxCheck(true);
    } else {
      setInterestsCheckBoxCheck(false);
    }
  }


  const checkEmailValidity = () => {
    if (!enteredInput.emailInput.includes("@")) {
      setInputIsValid({
        ...inputIsValid,
        emailIsValid: false,
      });
    } else {
      setInputIsValid({
        ...inputIsValid,
        emailIsValid: true,
      });
    }
  };

  const checkUsernameValidity = () => {
    if (!enteredInput.usernameInput.trim()) {
      setInputIsValid({
        ...inputIsValid,
        usernameIsValid: false,
      });
    } else {
      setInputIsValid({
        ...inputIsValid,
        usernameIsValid: true,
      });
    }
  };

  const checkPasswordValidity = () => {
    if (!enteredInput.passwordInput.trim()) {
      setInputIsValid({
        ...inputIsValid,
        passwordIsValid: false,
      });
    } else {
      setInputIsValid({
        ...inputIsValid,
        passwordIsValid: true,
      });
    }
  };

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  const closeModal = () => {
    setModalOpen(false);
  };

  const buttonRedirect = !formisValid ? (
    <button type="submit" className={styles.signupBtn}>
      Sign Up
    </button>
  ) : (
    <Link href="/dating">
      <a className={`${styles["signupBtn"]} ${styles["link"]}`} >Sign Up</a>
    </Link>
  );

  return (
    <form className={styles.SignupForm} onSubmit={onSubmit}>
      <h3>Sign Up</h3>
      <button onClick={closeModal} className={styles.closeBtn}>
        <Image src="/icons/x-mark.svg" layout="fill" alt="close modal button" />
      </button>
      <div className={styles.inputFields}>
        <label htmlFor="formEmail">Email</label>
        <input
          onBlur={checkEmailValidity}
          onChange={emailChangeHandler}
          className={`${styles["textInput"]} ${
            !inputIsValid.emailIsValid ? styles["error"] : " "
          }`}
          type="email"
          id="formEmail"
          value={enteredInput.emailInput}
        />
        <label htmlFor="formUsername">Username</label>
        <input
          onBlur={checkUsernameValidity}
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
          onBlur={checkPasswordValidity}
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
              <input
                onChange={genderCheckBoxHandler}
                value="cat"
                type="radio"
                id="gender-cat"
                name="gender"
              />
              <label htmlFor="gender-cat">Cat</label>
            </div>
            <div>
              <input
                onChange={genderCheckBoxHandler}
                value="dog"
                type="radio"
                id="gender-dog"
                name="gender"
              />
              <label htmlFor="gender-dog">Dog</label>
            </div>
          </div>
          <div className={styles.interestsWrapper}>
            <h2>I&apos;m interested in:</h2>
            <div>
              <input
                onChange={interestsCheckBoxHandlerCat}
                type="checkbox"
                id="check-cat"
              />
              <label htmlFor="check-cat">Cats</label>
            </div>
            <div>
              <input
                onChange={interestsCheckBoxHandlerDog}
                type="checkbox"
                id="check-dog"
              />
              <label htmlFor="check-dog">Dogs</label>
            </div>
          </div>
        </div>
        {buttonRedirect}
      </div>
    </form>
  );
};

export default SignupForm;
