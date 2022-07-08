import styled from "styled-components";

const CardStyles = styled.div`
    text-decoration: none;
    padding: 1em;
    color: #FFFFFF;
    border-radius: 10px;
    width: 200px;
    height: 120px;
    background-color: ${props => props.theme.backgroundCard};
    border: 1 px solid;
    font-weight: 100;
    text-align: left;
    border: 1px solid;

    h2 {
        font-size: 1rem;
        margin: 0 0 1rem 0;
    }

    p {
        font-size: 1rem;
        line-height: 1rem;
        margin: 0;
    }

    &:hover,
    &:focus,
    &:active{
        border-color: #000000;
        color: #0075f3;
    }
`

export default CardStyles
