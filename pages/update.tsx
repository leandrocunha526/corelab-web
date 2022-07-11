import { useRouter } from "next/router"
import Cookies from "universal-cookie"
import Form from "../components/Form"
import api from "../services/api"

const Update = () => {
   const cookies = new Cookies()

   const route = useRouter()

   const update = (data: any) => {
    const vehicleSelected = cookies.get("selected")
    const request = {
        _id: vehicleSelected._id,
        ...data
    }
    api.put("/update", request).then((res) => {
        if(res.status === 200) {
           alert("O veículo foi atualizado com sucesso, aperte OK e será redirecionado para os anúncios")
        }
        route.push("/")
    })
   }
   return (
        <Form handleSubmit={update}/>
   )
}

export default Update
