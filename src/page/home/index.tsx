import * as React from "react";
import { Link } from "react-router-dom";

//Compoents
import Layout from "../../components/layout";

export interface HomeProps {}

const Home: React.SFC<HomeProps> = () => {
  return (
    <Layout>
      <h1>home</h1>
      <nav>
        <Link to="/auth/registry">registry</Link>
        <Link to="/auth/login">login</Link>
        <Link to="/auth/reset-password">reset password</Link>
        <Link to="/auth/forget-password">forget password</Link>
      </nav>
    </Layout>
  );
};

export default Home;
