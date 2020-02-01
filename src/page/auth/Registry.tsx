import * as React from "react";

//Organisms
import RegistryOrganisms from "../../components/organisms/RegistryOrganisms";
//Template
import CenterTemplate from "../../components/template/CenterTemplate";

export interface RegistryProps {}

const Registry: React.SFC<RegistryProps> = () => {
  return (
    <CenterTemplate>
      <RegistryOrganisms />
    </CenterTemplate>
  );
};

export default Registry;
