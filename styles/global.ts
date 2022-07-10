import { createGlobalStyle } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    brakepoints: any;
    backgroundBody: string;
  }
}

const StylesGlobal = createGlobalStyle`
  body{
    width: 100%;
    padding: 0 24px;
    padding-top: 5rem;
    @media screen and (min-width: ${props => props.theme.brakepoints.laptopSize}){
      max-width: 869px;
      margin: auto;
      background-color: ${props => props.theme.backgroundBody};
    }
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  }
  html{
    background-color: ${props => props.theme.background};
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  button{
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
`;
export default StylesGlobal;
