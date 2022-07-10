import styled from "styled-components"

const Container = styled.div`
    gap: 1rem;
    flex-direction: column;
    display: flex;
    @media screen and (min-width: ${props => props.theme.brakepoints.laptopSize}){
        grid-template-columns: 1fr 1fr 1fr;
        width: 100%;
        display: grid;
        gap: 1rem;
  }
`
export default Container
