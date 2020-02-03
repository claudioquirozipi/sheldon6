import * as React from "react";
//Organisms
import ForgetPasswordOrganisms from "../../components/organisms/forgetPasswordOrganisms";
//Template
import CenterTemplate from "../../components/template/CenterTemplate";
export interface ForgetPasswordProps {}

const ForgetPassword: React.SFC<ForgetPasswordProps> = () => {
  return (
    <CenterTemplate>
      <ForgetPasswordOrganisms />
    </CenterTemplate>
  );
};

export default ForgetPassword;
