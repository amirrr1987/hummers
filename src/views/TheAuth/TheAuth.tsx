import React, { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import "./TheAuth.less";
const TheAuth: React.FC = (): ReactElement => {
  return (
    <div className="the-auth">
      <Outlet />
    </div>
  );
};

export default TheAuth;
