import styled from "styled-components"
import CardStyles from "./styles"

const Info = styled.div``

const CardPosition = styled.div`
    display: flex;
    justify-content: flex-end;
`

const CardComponent = (props: any) => {
  return (
    <CardStyles>
      <CardPosition>
        {
          props.showEdit &&
          <button onClick={() => props.Edit()}><img src={"editIcon.png"} width={"30d"} /></button>
        }
        <button onClick={() => props.Delete()}><img src={"deleteIcon.png"} width={"17px"} /></button>
        <button onClick={() => props.Favorite()}><img src={
          props.isFavorite ? "HeartFavoriteIcon.png" : "HeartIcon.png"
        } width={"20px"} /></button>
      </CardPosition >
      <Info>
        <span>
          <b>Nome: </b>{props.name} <br />
          <b>Descrição: </b>{props.description}<br />
          <b>Preço: </b> {props.price}<br />
          <b>Cor: </b> {props.color}<br />
          <b>Ano: </b> {props.year}<br />
        </span>
      </Info>
    </CardStyles >
  )
}

CardComponent.defaultProps = {
  Edit: () => { },
  showEdit: true,
}

export default CardComponent
