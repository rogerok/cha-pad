import React from "react";

import { Spinner, Overlay } from "./spinner.styles";

const SpinnerComponent = () => {
  return (
    <>
      <Overlay>
        <Spinner />
      </Overlay>
    </>
  );
};

export default SpinnerComponent;
