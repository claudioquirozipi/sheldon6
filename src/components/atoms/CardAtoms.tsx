import * as React from "react";

export interface CardProps {
  children: any;
}

const Card: React.SFC<CardProps> = props => {
  const { children } = props;
  return <div>{children}</div>;
};

export default Card;
