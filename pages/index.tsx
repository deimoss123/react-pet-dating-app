import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Header from "../components/landing-components/Header/Header";
import MainScreen from "../components/landing-components/main-screen/MainScreen";
import SideBar from "../components/landing-components/SideBar/SideBar";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Pawtners | Dating For Pets</title>
      </Head>
      <div className={styles.Home}>
        <Header setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
        <MainScreen />
        <h1>Pet Dating App</h1>
      </div>
    </>
  );
};

export default Home;
