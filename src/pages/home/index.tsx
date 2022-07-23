import { NextPage } from "next";
import { Layout } from "../../layout/default";
import styles from "../../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <div className={styles.content}>
        <h1 className={styles.title}>Hello World</h1>
        <p>Welcome</p>
      </div>
    </Layout>
  );
};

export default Home;
