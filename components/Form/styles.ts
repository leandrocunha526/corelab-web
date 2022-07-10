import styled from "styled-components"

const FormBox = styled.div`
  box-shadow: 5px 10px #000000;
  @media screen and (min-width: ${props => props.theme.brakepoints.laptopSize}) {
    a{
      left: 1rem;
      top: 1rem;
    }
    body {
      height: 100%;
      padding: 2rem 10rem;
    }
  }
`

export default FormBox
