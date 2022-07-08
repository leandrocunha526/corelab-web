import styled from "styled-components";
import ButtonStyle from "./styles"

interface Props{
  children: string;
  type: string;
  icon?: string;
}

const Icon = styled.img`
  position: relative;
  left: -100px;
  top: -46px;
  background-color: transparent;
`

const Button: React.FC<Props> = (props: Props) => {
  return (
    <>
      <ButtonStyle>
        {props.children}
      </ButtonStyle>
      <Icon src={props.icon} />
    </>
  )
}

export default Button
