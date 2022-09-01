import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Header from "../components/landing-components/Header/Header";
import MainScreen from "../components/landing-components/main-screen/MainScreen";
import Testimonials from "../components/landing-components/testimonials/Testimonials";
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
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
