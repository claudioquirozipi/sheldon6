import * as React from "react";

//Layout
import Layout from "../../components/layout";

export interface DashboardProps {}

const Dashboard: React.SFC<DashboardProps> = () => {
  return (
    <Layout>
      <h1>Dashboard</h1>
    </Layout>
  );
};

export default Dashboard;
