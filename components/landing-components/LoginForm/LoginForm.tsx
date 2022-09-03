import { Dispatch, FC, SetStateAction, SyntheticEvent } from "react";
import styles from "./LoginForm.module.scss";
import stylesSignUp from "../SignupForm/SignupForm.module.scss";
import Link from "next/link";
import Image from "next/image";

interface Props {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

const LoginForm: FC<Props> = ({ setModalOpen }) => {
  function onSubmit(e: SyntheticEvent) {
    e.preventDefault();
    setModalOpen(false);
  }

  return (
    <form className={stylesSignUp.SignupForm} onSubmit={onSubmit}>
      <h3>Log in</h3>
      <button className={stylesSignUp.closeBtn}>
        <Image src="/icons/x-mark.svg" layout="fill" alt="close modal button" />
      </button>
      <div className={stylesSignUp.inputFields}>
        <label htmlFor="formEmail">Email</label>
        <input className={stylesSignUp.textInput} type="email" id="formEmail" />
        <label htmlFor="formPassword">Password</label>
        <input
          className={stylesSignUp.textInput}
          type="password"
          id="formPassword"
        />
      </div>
      <p className={styles.forgotPassword}>Forgot Password</p>
      <Link href="/dating">
        <a className={stylesSignUp.signupBtn}>Log in</a>
      </Link>
    </form>
  );
};

export default LoginForm;
