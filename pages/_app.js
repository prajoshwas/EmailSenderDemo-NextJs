import Head from "next/head";
import Main from "./Main/index";
import Footer from "../components/Footer";
import "../styles/global.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Email Sender</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <Footer />
    </div>
  );
}
