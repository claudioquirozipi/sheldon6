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
export interface RegistryOrganismsProps {}

const RegistryOrganisms: React.SFC<RegistryOrganismsProps> = () => {
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
          label="Name "
          value={value}
          setValue={getInputValue}
          error=""
          icon={iconUser}
          id="idinput2"
        />
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
        <InputMolecules
          label="Phome"
          value={value}
          setValue={getInputValue}
          error=""
          icon={iconUser}
          id="idinput2"
        />
        <InputMolecules
          label="Company"
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

export default RegistryOrganisms;
