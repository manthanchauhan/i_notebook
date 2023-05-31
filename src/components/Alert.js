import React, { useContext } from "react";
import {getTitleCase} from "../utils"
import AlertContext from "../contexts/alert/AlertContext";

const Alert = () => {
  const context = useContext(AlertContext);
  const {alert} = context;

  return (
    <div style={{height: '50px'}}>
    {alert && <div>
      <div className={`alert alert-${alert.type.toLowerCase()} alert-dismissible fade show`} role="alert">
        <strong>{getTitleCase(alert.type)}</strong>: {alert.message}
      </div>
    </div>}
    </div>
  );
};

export default Alert;
