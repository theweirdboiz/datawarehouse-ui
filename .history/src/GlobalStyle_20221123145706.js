import { createGlobalStyle } from "styled-components";
import { GlobalClasses } from "./GlobalClasses";
export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600;900&display=swap');

  ${GlobalClasses}
`;
