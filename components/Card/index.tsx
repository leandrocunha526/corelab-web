import CardComponent from "../layout/CardComponent"
import Container from "./styles"
import { Vehicle } from "../../interfaces/Vehicles"

type VehicleProps = {
    vehicles: Vehicle[],
    changeFavorite?: any,
    Edit?: any,
    Delete?: any
}

const Card: React.FC<VehicleProps> = (props: VehicleProps) => {
    return (
        <Container>
            {props.vehicles.map((vehicle, key) =>
                <CardComponent
                    key={key}
                    name={vehicle.name}
                    description={vehicle.description}
                    plate={vehicle.plate}
                    year={vehicle.year}
                    color={vehicle.color}
                    price={vehicle.price}
                    showEdit={(vehicle.user === "user")}
                    isFavorite={vehicle.isFavorite}
                    Favorite={() => { props.changeFavorite(vehicle._id, vehicle.isFavorite) }}
                    Delete={() => props.Delete(vehicle._id)}
                    Edit={() => props.Edit(key)}
                />
            )}
        </Container>
    )
}

export default Card
