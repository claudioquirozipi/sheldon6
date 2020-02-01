import * as React from "react";

export interface LayoutProps {
  children: any;
}

const Layout: React.SFC<LayoutProps> = props => {
  const { children } = props;
  return (
    <div>
      Layout
      {children}
    </div>
  );
};

export default Layout;
