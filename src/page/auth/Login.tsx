import * as React from "react";

//Organisms
import LoginOrganisms from "../../components/organisms/LoginOrganisms";
//Template
import CenterTemplate from "../../components/template/CenterTemplate";

export interface LoginProps {}

const Login: React.SFC<LoginProps> = () => {
  return (
    <CenterTemplate>
      <LoginOrganisms />
    </CenterTemplate>
  );
};

export default Login;
