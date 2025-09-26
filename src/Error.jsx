import React from "react";
import "./index.css";
function Error() {
  return (
    <div
      className=" error text-center container  "
      style={{
        fontSize: "",
        color: "red",
        placeSelf: "center",
        padding: "50px 0 0 0",
      }}
    >
      <h1>⚠️Error</h1>
      <h1>Page not found</h1>
    </div>
  );
}

export default Error;
