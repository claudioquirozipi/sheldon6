import * as React from "react";
import { Link } from "react-router-dom";

export interface NavbarProps {}

const Navbar: React.SFC<NavbarProps> = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/billing">Billing</Link>
      <Link to="/communication-flow">Communication Flow</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/forms">Forms</Link>
      <Link to="/funnel">Funnel</Link>
      <Link to="/integrations">Integrations</Link>
      <Link to="/media-planing">Media Planing</Link>
      <Link to="/my-profile">My Profile</Link>
      <Link to="/open-data">Open Data</Link>
      <Link to="/staff-augmentation">Staff Augmentation</Link>
      <Link to="/support">Support</Link>
    </div>
  );
};

export default Navbar;
