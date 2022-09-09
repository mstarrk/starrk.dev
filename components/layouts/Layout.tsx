import Navbar from "../Navbar";
import Footer from "../Footer";
import React from "react";
import Head from "next/head";
import SettingsModal from "../SettingsModal";
import MainContextProvider from "../../contexts/MainContextProvider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>starrk.dev</title>
      </Head>

      <MainContextProvider>
        <Navbar />
        <SettingsModal />
        <div className="my-container flex flex-col">
          <div className="content-container">{children}</div>
          <Footer />
        </div>
      </MainContextProvider>
    </>
  );
}
