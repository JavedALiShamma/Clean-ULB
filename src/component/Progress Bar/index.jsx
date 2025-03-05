import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProgressBar = ({ progress, label, color }) => {
  return (
    <div className="progress" style={{ height: "30px" }}>
      <div
        className={`progress-bar bg-${color} progress-bar-striped progress-bar-animated`}
        role="progressbar"
        style={{ width: `${progress}%` }}
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {label ? label : `${progress}%`}
      </div>
    </div>
  );
};
export default ProgressBar;