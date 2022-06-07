import type { NextPage } from "next";
import Layout from "../components/Layout";
import ShowCase from "../components/ShowCase";

const Home: NextPage = () => {
  return (
    <Layout title="Amir Asadi | Home">
      <ShowCase />
    </Layout>
  );
};

export default Home;
