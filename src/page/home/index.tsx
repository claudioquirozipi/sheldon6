import * as React from "react";

//Compoents
import Layout from "../../components/layout";

export interface HomeProps {}

const Home: React.SFC<HomeProps> = () => {
  return (
    <Layout>
      <h1>home</h1>
    </Layout>
  );
};

export default Home;
