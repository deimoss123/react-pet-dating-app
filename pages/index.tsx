import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/landing-components/Header/Header";
import MainScreen from "../components/landing-components/main-screen/MainScreen";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pawtners | Dating For Pets</title>
      </Head>
      <MainScreen />
      <div className={styles.Home}>
        <Header />
        <h1>Pet Dating App</h1>
      </div>
    </>
  );
};

export default Home;
