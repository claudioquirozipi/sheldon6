import * as React from "react";
import { BrowserRouter as Routes, Route, Switch } from "react-router-dom";

//Components
import Home from "../page/home";
import Billing from "../page/billing";
import CommunicationFlow from "../page/communicationFlow";
import Dashboard from "../page/dashboard";
import Forms from "../page/forms";
import Funnel from "../page/funnel";
import Integrations from "../page/Integrations";
import MediaPlaning from "../page/mediaPlaning";
import MyProfile from "../page/myprofile";
import OpenData from "../page/openData";
import StaffAugmentation from "../page/staffAugmentation";
import Support from "../page/support";
//Auth
import Registry from "../page/auth/Registry";
import Login from "../page/auth/Login";
import ForgetPassword from "../page/auth/ForgetPassword";
import ResetPassword from "../page/auth/ResetPassword";
export interface RouterAppProps {}

const RouterApp: React.SFC<RouterAppProps> = () => {
  return (
    <Routes>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/billing" component={Billing} />
        <Route exact path="/communication-flow" component={CommunicationFlow} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/forms" component={Forms} />
        <Route exact path="/funnel" component={Funnel} />
        <Route exact path="/integrations" component={Integrations} />
        <Route exact path="/media-planing" component={MediaPlaning} />
        <Route exact path="/my-profile" component={MyProfile} />
        <Route exact path="/open-data" component={OpenData} />
        <Route exact path="/staff-augmentation" component={StaffAugmentation} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/auth/registry" component={Registry} />
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/auth/reset-password" component={ResetPassword} />
        <Route exact path="/auth/forget-password" component={ForgetPassword} />
      </Switch>
    </Routes>
  );
};

export default RouterApp;
