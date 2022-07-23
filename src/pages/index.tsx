import type { NextPage } from "next";
import { Layout } from "../layout/default";

const Home: NextPage = () => {
  return (
    <Layout title="Next App">
      <h1 className="text-3xl font-bold underline">Hello TailwindCSS</h1>
    </Layout>
  );
};

export default Home;
