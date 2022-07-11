import api from "../services/api"
import Form from "../components/Form"
import { useRouter } from "next/router"

const Register = () => {
    const route = useRouter()

    const registerVehicle = (data: any) => {
    const request = {
        ...data,
        user: "user",
        isFavorite: false,
    }

    try{
      api.post('/register', request).then(res => {
        if(res.status === 201){
            alert("Veículo cadastrado com êxito, aperte OK e será redirecionado para os anúncios")
        }
        route.push("/")
    })
    }
    catch(error){
      console.log(error)
    }
  }

  return (
      <Form handleSubmit={registerVehicle}/>
  )
}

export default Register
