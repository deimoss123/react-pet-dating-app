import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pet Dating App</title>
      </Head>

      <div className={styles.Home}>
        <h1>Pet Dating App</h1>
      </div>
    </>
  );
};

export default Home;
