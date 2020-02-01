import * as React from "react";

//Molecules
import Navbar from "../molecules/navbar";
export interface LayoutProps {
  children: any;
}

const Layout: React.SFC<LayoutProps> = props => {
  const { children } = props;
  return (
    <div>
      <Navbar />
      Layout
      {children}
    </div>
  );
};

export default Layout;
