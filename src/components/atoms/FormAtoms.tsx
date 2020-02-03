import * as React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
export interface FormAtomsProps {
  children: any;
  style?: {};
}

const FormAtoms: React.SFC<FormAtomsProps> = props => {
  const { children, style } = props;
  return <Form style={style}>{children}</Form>;
};

export default FormAtoms;
