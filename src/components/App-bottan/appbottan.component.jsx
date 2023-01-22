import React from "react";

import '../App-bottan/appbotton.style.scss';

const AppButtan = ({ children, ...props }) => (
  <button className="app-button" {...props}>{children}</button>
);

export default AppButtan;