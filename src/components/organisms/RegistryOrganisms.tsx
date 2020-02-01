import * as React from "react";

//Atoms
import CardAtoms from "../atoms/CardAtoms";
import FormAtoms from "../atoms/FormAtoms";
export interface RegistryOrganismsProps {}

const RegistryOrganisms: React.SFC<RegistryOrganismsProps> = () => {
  return (
    <CardAtoms>
      <FormAtoms>
        <h1>Whelcome to sheldon</h1>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="submit" />
      </FormAtoms>
    </CardAtoms>
  );
};

export default RegistryOrganisms;
