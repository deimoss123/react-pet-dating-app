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
import Modal from "../components/reusable-components/Footer/Modal/Modal";
import SignupForm from "../components/landing-components/SignupForm/SignupForm";

const Home: NextPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          setModalOpen={setIsModalOpen}
        />
        <MainScreen />
        <Testimonials />
        <LinkTree />
        <AppInfo />
        <Footer />
      </div>
      <Modal isOpen={isModalOpen} setModalOpen={setIsModalOpen}>
        <SignupForm setModalOpen={setIsModalOpen} />
      </Modal>
    </>
  );
};

export default Home;
