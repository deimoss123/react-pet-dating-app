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
    emailIsValid: true,
    passwordIsValid: true,
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

  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredInput({ ...enteredInput, emailInput: e.target.value });
  };

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredInput({ ...enteredInput, passwordInput: e.target.value });
  };

  useEffect(() => {
    if (
      !enteredInput.emailInput.includes("@") ||
      !enteredInput.passwordInput.trim()
    ) {
      setFormIsValid(false);
    }
  }, []);

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

  const tooBad = <p className={styles.forgotPassword}>Too bad!</p>;

  const changeMessage = () => {
    setMessage(tooBad);
  }

  const forgotPassword = (
    <p onClick={changeMessage} className={styles.forgotPassword}>Forgot Password?</p>
  );

 const [initialMessage, setMessage] =  useState(forgotPassword);

  const closeModal = () => {
    setModalOpen(false);
  };

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

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
        {initialMessage}
        {buttonRedirect}
      </div>
    </form>
  );
};

export default LoginForm;
