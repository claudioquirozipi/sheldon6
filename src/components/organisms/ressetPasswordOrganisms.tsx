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
export interface ResetPasswordProps {}

const ResetPassword: React.SFC<ResetPasswordProps> = () => {
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
          Create a new
          <br />
          password
        </h1>
        <InputMolecules
          label="Password"
          type="password"
          value={value}
          setValue={getInputValue}
          error=""
          icon={iconUser}
          id="idinput2"
        />
        <InputMolecules
          label="Re password"
          type="password"
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

export default ResetPassword;
