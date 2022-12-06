import styled from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    backgroundCard: string;
  }
}

const CardStyles = styled.div`
  padding: 0.2em;
  color: #ffffff;
  border-radius: 8px;
  width: 230px;
  height: 200px;
  background-color: ${(props) => props.theme.backgroundCard};
  border: 1 px solid;
  font-weight: 100px;
  text-align: left;
  border: 1px solid;
  text-decoration: none;

  span {
    font-size: 1rem;
    margin: 0;
  }

  button {
    margin: 3px;
    margin-right: 1px;
  }

  &:hover,
  &:focus,
  &:active {
    border-color: #000000;
  }
`;

export default CardStyles;
