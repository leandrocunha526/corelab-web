import api from "../services/api";
import { useState } from "react";
import Form from "../components/Form";

const Register = () => {
    const [message, setMessage] = useState("")

    const registerVehicle = (data: any) => {
    const request = {
        ...data,
        user: "user",
        isFavorite: false,
    }

    try{
      api.post('/register', request).then(res => {
        if(res.status === 201){
            setMessage("Veículo cadastrado com sucesso")
        }
    })
    }
    catch(error){
      console.log(error)
    }
  }

  return (
    <>
      <Form handleSubmit={registerVehicle}>
      </Form>
      <p>{message}</p>
    </>
  )
}

export default Register
