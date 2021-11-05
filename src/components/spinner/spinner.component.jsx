import React from "react";

import { Spinner, Overlay } from "./spinner.styles";

const SpinnerComponent = () => {
  return (
    <div className="">
      <Overlay>
        <Spinner />
      </Overlay>
    </div>
  );
};

export default SpinnerComponent;
