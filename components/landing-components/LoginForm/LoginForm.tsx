import {
  Dispatch,
  FC,
  SetStateAction,
  FormEvent,
  useState,
  useEffect,
} from "react";
import styles from "./LoginForm.module.scss";
import stylesSignUp from "../SignupForm/SignupForm.module.scss";
import Link from "next/link";
import Image from "next/image";

interface Props {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

const LoginForm: FC<Props> = ({ setModalOpen }) => {
  const [enteredInput, setEnteredInput] = useState({
    emailInput: "",
    passwordInput: "",
  });

  const [inputIsValid, setInputIsValid] = useState({
    emailIsValid: false,
    passwordIsValid: false,
  });

  const [formisValid, setFormIsValid] = useState(false);

  useEffect(() => {
    if (inputIsValid.emailIsValid && inputIsValid.passwordIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [inputIsValid.emailIsValid, inputIsValid.passwordIsValid]);

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
    console.log(inputIsValid);
    e.preventDefault();
  }

  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredInput({ ...enteredInput, emailInput: e.target.value });
  };

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredInput({ ...enteredInput, passwordInput: e.target.value });
  };

  const buttonRedirect = !formisValid ? (
    <button type="submit" className={stylesSignUp.signupBtn}>
      Sign Up
    </button>
  ) : (
    <Link href="/dating">
      <a className={`${stylesSignUp["signupBtn"]}  ${stylesSignUp["link"]}`}>
        Sign Up
      </a>
    </Link>
  );



  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <form className={stylesSignUp["SignupForm"]} onSubmit={onSubmit}>
      <h3>Log in</h3>
      <button onClick={closeModal} className={stylesSignUp.closeBtn}>
        <Image src="/icons/x-mark.svg" layout="fill" alt="close modal button" />
      </button>
      <div className={stylesSignUp.inputFields}>
        <label htmlFor="formEmail">Email</label>
        <input
          onBlur={checkEmailValidity}
          onChange={emailChangeHandler}
          className={`${stylesSignUp["textInput"]} ${
            !inputIsValid.emailIsValid ? stylesSignUp["error"] : " "
          }`}
          type="email"
          id="formEmail"
        />
        <label htmlFor="formPassword">Password</label>
        <input
          onChange={passwordChangeHandler}
          onBlur={checkPasswordValidity}
          className={`${stylesSignUp["textInput"]} ${
            !inputIsValid.passwordIsValid ? stylesSignUp["error"] : " "
          }`}
          type="password"
          id="formPassword"
        />
        <p className={styles.forgotPassword}>Forgot Password?</p>
        {buttonRedirect}
      </div>
    </form>
  );
};

export default LoginForm;
