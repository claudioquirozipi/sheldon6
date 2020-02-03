import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${(props: any) => props.theme.background.tertiary};
`;
export interface CenterTemplateProps {
  children: any;
}

const CenterTemplate: React.SFC<CenterTemplateProps> = props => {
  const { children } = props;
  return (
    <Container>
      <div>{children}</div>
    </Container>
  );
};

export default CenterTemplate;
