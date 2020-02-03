import * as React from "react";
import styled from "styled-components";

export interface InputSubmitProps {}
const ContainerInput = styled.div`
  input {
    background: ${({ theme }: any) => theme.color.primary};
    color: ${({ theme }: any) => theme.color.fourth};
    border: none;
    outline: none;
    padding: 1em 4em;
    margin: 0.75em 0;
    border-radius: 1em;
  }
`;
const InputSubmit: React.SFC<InputSubmitProps> = () => {
  return (
    <ContainerInput>
      <input type="submit" />
    </ContainerInput>
  );
};

export default InputSubmit;
