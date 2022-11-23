import { css } from "styled-components";
export const GlobalClasses = css`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600;900&display=swap");
  body {
    font-family: "Poppins", sans-serif;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    padding: 0;
    font: inherit;
  }
  body {
    line-height: 1.5;
  }
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  input,
  button,
  textarea,
  select {
    outline: none;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
`;
