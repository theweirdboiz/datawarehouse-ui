import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600;900&display=swap');

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

    body {
      font-family: 'Poppins', sans-serif;
      }
`;
