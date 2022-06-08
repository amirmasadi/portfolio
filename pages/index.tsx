import type { NextPage } from "next";
import Layout from "../components/Layout";
import ShowCase from "../components/home/ShowCase";
import AboutMe from "../components/home/AboutMe";

const Home: NextPage = () => {
  return (
    <Layout title="Amir Asadi | Home">
      <ShowCase />
      <AboutMe />
    </Layout>
  );
};

export default Home;
