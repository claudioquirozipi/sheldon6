import * as React from "react";
//Organisms
import RessetPasswordOrganisms from "../../components/organisms/ressetPasswordOrganisms";
//Template
import CenterTemplate from "../../components/template/CenterTemplate";
export interface ResetPasswordProps {}

const ResetPassword: React.SFC<ResetPasswordProps> = () => {
  return (
    <CenterTemplate>
      <RessetPasswordOrganisms />
    </CenterTemplate>
  );
};

export default ResetPassword;
