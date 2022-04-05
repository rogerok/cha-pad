import styled from "styled-components";

import background from "../../img/background-image.jpg";

export const LayoutContainer = styled.main`
  margin: 0 auto;
  padding: 0 50px;
  min-height: 100vh;
  max-width: 1370px;
  min-width: 100%;
  background: #232526 url(${background}) repeat-y top right;
  background-size: auto;
  font-weight: 400;
  color: white;
`;
