import * as React from "react";

//Atoms
import CardAtoms from "../atoms/CardAtoms";
import FormAtoms from "../atoms/FormAtoms";
//Molecules
import InputMolecules from "../molecules/inputMolecules";
import InputSubmit from "../molecules/inputSubmit";
//Containers
import InputContainer from "../containers/InputContainer";
//Assets
import iconUser from "../../assets/img/iconUser.svg";

export interface LoginOrganismsProps {}

const LoginOrganisms: React.SFC<LoginOrganismsProps> = () => {
  const [value, setValue] = React.useState("");

  const getInputValue = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <CardAtoms>
      <FormAtoms
        style={{
          padding: "1em 6em",
          width: "550px",
          boxSizing: "border-box"
        }}
      >
        <h1>
          Whelcome <br />
          to sheldon
        </h1>
        <InputMolecules
          label="laber1"
          value={value}
          setValue={getInputValue}
          error="error"
          icon={iconUser}
          id="idinput1"
        />
        <InputMolecules
          label="laber1"
          value={value}
          setValue={getInputValue}
          error=""
          icon={iconUser}
          id="idinput2"
        />
        <InputSubmit />

        <a href="#" style={{ marginBottom: "0.67em" }}>
          ForgotPassword
        </a>
      </FormAtoms>
    </CardAtoms>
  );
};

export default LoginOrganisms;
