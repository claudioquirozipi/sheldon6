import * as React from "react";
import { BrowserRouter as Routes, Route, Switch } from "react-router-dom";

//Components
import Home from "../page/home";
export interface RouterAppProps {}

const RouterApp: React.SFC<RouterAppProps> = () => {
  return (
    <Routes>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Routes>
  );
};

export default RouterApp;
