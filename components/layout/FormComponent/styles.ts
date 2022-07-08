import styled from "styled-components"

const Form = styled.div`
    flex-direction: column;
    gap: 30px;
    width: 100%;
    padding: 2rem 1 rem;
    display: flex;
    background-color: #FFFFFF;
    padding-bottom: 1rem;
    Button {
      align-self: flex-end;
    }
    input {
      height: 100%;
      width: 100%;
      font-size: 1rem;
      outline: none;
      border: 1px solid black;
      display: flex;
      align-items: center;
      border-radius: 100px;
      padding: 0 34px;
    }
`
export default Form
