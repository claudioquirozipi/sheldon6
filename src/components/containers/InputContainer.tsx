import * as React from "react";
import InputMolecules from "../molecules/inputMolecules";

export interface InputContainerProps {
  label: string;
  value: string;
  setValue: (e: any) => void;
  error?: string;
  type?: string;
  icon: string;
  id: string;
}

const InputContainer: React.SFC<InputContainerProps> = props => {
  const { label, value, setValue, error, type, icon, id } = props;
  //   let inputType: string;
  //   let inputError: string | null = null;
  //   React.useEffect(() => {
  //     switch (type) {
  //       case "email":
  //         inputType = "email";
  //         {
  //           error ? (inputError = error) : (inputError = "no hay error");
  //         }
  //         console.log("pasó por aquí, ", error);
  //         break;

  //       default:
  //         break;
  //     }
  //   }, [type, error]);
  return (
    <div>
      <InputMolecules
        label={label}
        value={value}
        setValue={setValue}
        error={error}
        type={type}
        icon={icon}
        id={id}
      />
    </div>
  );
};

export default InputContainer;
