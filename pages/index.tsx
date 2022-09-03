import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Header from "../components/landing-components/Header/Header";
import AppInfo from "../components/landing-components/AppInfo/AppInfo";
import LinkTree from "../components/landing-components/LinkTree/LinkTree";
import MainScreen from "../components/landing-components/MainScreen/MainScreen";
import Testimonials from "../components/landing-components/Testimonials/Testimonials";
import styles from "../styles/Home.module.scss";
import Footer from "../components/reusable-components/Footer/Footer";
import Modal from "../components/reusable-components/Modal/Modal";
import SignupForm from "../components/landing-components/SignupForm/SignupForm";
import LoginForm from "../components/landing-components/LoginForm/LoginForm";

const Home: NextPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Pawtners | Dating For Pets</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <div className={styles.Home}>
        <Header
          setSidebarOpen={setSidebarOpen}
          sidebarOpen={sidebarOpen}
          setLoginModalOpen={setLoginModalOpen}
        />
        <MainScreen openSignupModal={setSignupModalOpen} />
        <Testimonials />
        <LinkTree />
        <AppInfo />
        <Footer />
      </div>
      <Modal isOpen={isSignupModalOpen} setModalOpen={setSignupModalOpen}>
        <SignupForm setModalOpen={setSignupModalOpen} />
      </Modal>
      <Modal isOpen={isLoginModalOpen} setModalOpen={setLoginModalOpen}>
        <LoginForm setModalOpen={setLoginModalOpen} />
      </Modal>
    </>
  );
};

export default Home;
