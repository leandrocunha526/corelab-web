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
          <button onClick={() => props.Favorite()}>{
            props.isFavorite ? "HeartFavoriteIcon.png" : "HeartIcon.png"
          }</button>
           {
            props.showEdit &&
            <button onClick={() => props.Edit()}>Editar</button>
           }
           <button onClick={() => props.Delete()}>Remover</button>
          </CardPosition>
         <Info>
            <h2>Nome: {props.name}</h2>
            <p>
              <b>Descrição: </b> {props.description}
              <b>Preço: </b> {props.price}
              <b>Cor: </b> {props.color}
              <b>Ano: </b> {props.year}
            </p>
         </Info>
        </CardStyles>
    )
}

CardComponent.defaultProps = {
    Edit: () => {},
    showEdit: true,
}

export default CardComponent
