//import { useState } from "react";
import React from "react";
import { MultipleCustomHooks } from "../examples/MultipleCustomHooks";
import "../useEffect/effects.css";

export const RealExampleRef = () => {
  const [show, setShow] = React.useState(false);
  return (
    <div>
      <h1>RealExampleRef</h1>
      <hr />
      {show && <MultipleCustomHooks />}
      <button className="btn btn-primary mt-5" onClick={() => setShow(!show)}>
        Show Component/Hide Component
      </button>
    </div>
  );
};
