import * as React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export interface FormAtomsProps {
  children: any;
}

const FormAtoms: React.SFC<FormAtomsProps> = props => {
  const { children } = props;
  return <Form>{children}</Form>;
};

export default FormAtoms;
