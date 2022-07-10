import styled from "styled-components";

const HomeStyle = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  p {
    align-self: center;
  }
    @media screen and(min-width: ${props => props.theme.brakepoints.laptopSize}){
      Button {
        max-width: 364px;
      }
    }
`;
export default HomeStyle;
