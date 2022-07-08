import CardComponent from "../layout/CardComponent"
import Container from "./styles"
import { Vehicle } from "../../interfaces/Vehicles"

interface VehiclesProps{
    vehicles: Vehicle[]
}

const Card: React.FC<VehiclesProps> = ({vehicles}: VehiclesProps, props: any) => {
    return (
        <Container>
            { vehicles.map((vehicle, key) =>
             <CardComponent
                key={key}
                name={vehicle.name}
                description={vehicle.description}
                plate={vehicle.plate}
                year={vehicle.year}
                color={vehicle.color}
                price={vehicle.price}
                showEdit={(vehicle.user === "user1")}
                isFavorite={vehicle.isFavorite}
                Favorite={() => {props.changeFavorite(vehicle._id, vehicle.isFavorite)}}
                Delete={() => props.Delete(vehicle._id)}
                Edit={() => props.Edit(key)}
             />
            ) }
        </Container>
    )
}

export default Card
