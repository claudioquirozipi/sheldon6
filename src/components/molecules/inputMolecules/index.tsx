import * as React from "react";
import styled, { css } from "styled-components";

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props: any) => props.theme.background.primary};
  border: 2px solid ${(props: any) => props.theme.color.primary};
  margin: 0.75em 0;
  padding: 0.5em 1em;
  border-radius: 0.5em;
  width: 100%;
  /* ${(props: any) =>
    props.error &&
    css`
      border: 2px solid ${(props: any) => props.theme.color.error};
    `} */
`;
const PositionContainer = styled.div`
  height: 1em;
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  label {
    color: ${(props: any) => props.theme.color.primary};
    background: transparent;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-0.5em, -50%);
    transform-origin: left center;
    transition: transform 0.3s;
    font-size: 1em;
    border-radius: 0.5em;
    padding: 0.3em 0.5em;
    ${(props: iPropsLabel) =>
      props.focus &&
      css`
        color: #2a93f0;
        transform: translate(-0.5em, -105%) scale(0.5);
        background: ${(props: any) => props.theme.background.primary};
      `}
  }
  input {
    height: 100%;
    color: ${(props: any) => props.theme.colorText.primary};
    border: none;
    outline: none;
    width: 100%;
  }
  span {
    color: ${(props: any) => props.theme.color.error};
    position: absolute;
    bottom: -3em;
    left: 0;
    font-size: 0.5em;
  }
`;
const Icon = styled.img`
  width: 1em;
  height: 1em;
  margin-right: 1em;
`;
export interface iPropsLabel {
  focus: boolean;
}
export interface InputMoleculesProps {
  label: string;
  value: string;
  setValue: (e: any) => void;
  type?: string;
  error?: string;
  icon: string;
  id: string;
}
const InputMolecules: React.SFC<InputMoleculesProps> = props => {
  const { label, value, setValue, type, error, icon, id } = props;
  const [focus, setFocus] = React.useState(false);

  function handleOnBlur() {
    if (value === "") {
      setFocus(false);
    }
  }
  return (
    <InputContainer
    // error={error!=="" ? true: false}
    >
      <Icon src={icon} alt="icon" />
      <PositionContainer focus={focus}>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          type={type || "text"}
          onFocus={() => setFocus(true)}
          onBlur={() => handleOnBlur()}
          value={value}
          onChange={setValue}
        />
        {error ? <span>{error}</span> : null}
      </PositionContainer>
      {/* <img src={icon} alt="icon" /> */}
    </InputContainer>
  );
};

export default InputMolecules;
