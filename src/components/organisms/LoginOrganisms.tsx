import * as React from "react";

//Atoms
import CardAtoms from "../atoms/CardAtoms";
import FormAtoms from "../atoms/FormAtoms";
//Molecules
import InputMolecules from "../molecules/inputMolecules";
export interface LoginOrganismsProps {}

const LoginOrganisms: React.SFC<LoginOrganismsProps> = () => {
  return (
    <CardAtoms>
      <FormAtoms>
        <h1>Whelcome to sheldon</h1>
        <InputMolecules />
        <InputMolecules />
        <input type="submit" />
        <a href="#">ForgotPassword</a>
      </FormAtoms>
      <a href="#">volver al home</a>
    </CardAtoms>
  );
};

export default LoginOrganisms;
