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
export interface ForgetPasswordOrganismsProps {}

const ForgetPasswordOrganisms: React.SFC<ForgetPasswordOrganismsProps> = () => {
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
        <h1 style={{ textAlign: "center" }}>
          Send a URL to <br />
          you email
        </h1>

        <InputMolecules
          label="Emal"
          type="email"
          value={value}
          setValue={getInputValue}
          error=""
          icon={iconUser}
          id="idinput2"
        />

        <InputMolecules
          label="Send"
          value={value}
          setValue={getInputValue}
          error=""
          icon={iconUser}
          id="idinput2"
        />

        <InputSubmit />
      </FormAtoms>
    </CardAtoms>
  );
};

export default ForgetPasswordOrganisms;
