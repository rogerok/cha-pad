import styled from "styled-components";

import background from "../../img/background-image.jpg";

export const LayoutContainer = styled.main`
  margin: 0 auto;
  padding: 0 50px;
  min-height: 100vh;
  max-width: 1370px;
  min-width: 100%;
  background-image: url(${background});
  background-position: center;
  background-size: contain;
  background-repeat: repeat;
  background-color: #525251;
  color: white;
`;
