import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/landing-components/Header/Header";
import MainScreen from "../components/landing-components/main-screen/MainScreen";
import Testimonials from "../components/landing-components/testimonials/Testimonials";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pawtners | Dating For Pets</title>
      </Head>
      <div className={styles.Home}>
        <Header />
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
