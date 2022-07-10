import styled from "styled-components"

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    padding: 3rem 2rem;
    padding-bottom: 1rem;
    @media screen and (min-width:${props => props.theme.brakepoints.laptopSize}) {
      background-color: ${props => props.theme.background};
    }
    Button {
      align-self: flex-end;
    }
    label {
      margin-left: 1rem;
    }
    input {
      font-size: 1rem;
      outline: none;
      align-items: center;
      border-radius: 100px;
      padding: 0px 34px;
      width: 100%;
      height: 3rem;
      display: flex;
      border: "none";
    }
`
export default Form
