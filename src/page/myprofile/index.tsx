import * as React from "react";

//Layout
import Layout from "../../components/layout";

export interface MyProfileProps {}

const MyProfile: React.SFC<MyProfileProps> = () => {
  return (
    <Layout>
      <h1>My profile</h1>
    </Layout>
  );
};

export default MyProfile;
