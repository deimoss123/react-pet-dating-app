import type { NextPage } from "next";
import Head from "next/head";
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
        <MainScreen />
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
