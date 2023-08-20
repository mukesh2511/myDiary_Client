import React from "react";

const Alert = (prop) => {
  const capitalize = (word) => {
    if (word === "danger") {
      word = "error";
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <>
      <div style={{ height: "50px" }}>
        {prop.alert && (
          <div className={`alert alert-${prop.alert.type}`} role="alert">
            <strong>{capitalize(prop.alert.type)}</strong> : {prop.alert.msg}
          </div>
        )}
      </div>
    </>
  );
};

export default Alert;
