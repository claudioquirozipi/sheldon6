import * as React from "react";
import styled, { css } from "styled-components";
export interface InputMoleculesProps {}

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props: any) => props.theme.background.primary};
  border: 2px solid ${(props: any) => props.theme.color.primary};
  margin: 0.5em 0;
  padding: 0.5em 1em;
  border-radius: 2em;
  img {
    width: 1em;
    height: 1em;
    border: 1px solid blue;
  }
`;
const PositionContainer = styled.div`
  height: 1em;
  display: flex;
  align-items: center;
  position: relative;
  label {
    color: ${(props: any) => props.theme.color.primary};
    background: ${(props: any) => props.theme.background.primary};
    position: absolute;
    top: -1em;
  }
  input {
    height: 100%;
    color: ${(props: any) => props.theme.colorText.primary};
  }
  span {
    color: ${(props: any) => props.theme.color.error};
    position: absolute;
    bottom: -1em;
    left: 0;
  }
`;

const imgUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSMmh3QyEpKjT68djH9beV-_K3itfozjtvwa8rHmnHS93a01sSv";

const InputMolecules: React.SFC<InputMoleculesProps> = () => {
  return (
    <InputContainer>
      <img src={imgUrl} alt="icon" />
      <PositionContainer>
        <label htmlFor="">label</label>
        <input type="text" />
        <span>Error</span>
      </PositionContainer>
      <img src={imgUrl} alt="icon" />
    </InputContainer>
  );
};

export default InputMolecules;
