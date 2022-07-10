import styled from "styled-components"

const FormBox = styled.div`
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
