import * as React from "react";
import styled from "styled-components";
export interface CardProps {
  children: any;
}
const Container = styled.div`
  background: ${({ theme }: any) => theme.background.primary};
  border-radius: 0.3em;
  box-shadow: ${({ theme }: any) => theme.shadow};
`;
const Card: React.SFC<CardProps> = props => {
  const { children } = props;
  return <Container>{children}</Container>;
};

export default Card;
