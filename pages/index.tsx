import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Header from "../components/landing-components/Header/Header";
import AppInfo from "../components/landing-components/AppInfo/AppInfo";
import LinkTree from "../components/landing-components/LinkTree/LinkTree";
import MainScreen from "../components/landing-components/MainScreen/MainScreen";
import Testimonials from "../components/landing-components/Testimonials/Testimonials";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Pawtners | Dating For Pets</title>
        <link rel="icon" type="image/x-icon" href="../public/favicon.ico" />
      </Head>
      <div className={styles.Home}>
        <Header setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
        <MainScreen />
        <Testimonials />
        <LinkTree />
        <AppInfo />
      </div>
    </>
  );
};

export default Home;
