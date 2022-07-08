import type { NextPage } from "next";
import Link from "next/link";
import NavBar from "../components/NavBar/NavBar.components";
import Footer from "../components/Footer/Footer.components";

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <div>Home Page</div>
      <Footer />
    </>
  );
};

export default Home;
