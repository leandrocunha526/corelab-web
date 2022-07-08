import Button from "../Button"
import Form from "./styles"
import { useForm } from "react-hook-form"

const FormComponent = (props: any) => {
    const { register, handleSubmit } = useForm()

    return (
        <>
         <Form onSubmit={handleSubmit(props.handleSubmit)}>
            <input
              type="text"
              {...register('name')}
              placeholder="Digite o nome do veículo"
            />
            <input
              type="text"
              {...register('description')}
              placeholder="Digite a descrição do veículo"
            />
            <input
              type="text"
              {...register('plate')}
              placeholder="Digite o local"
            />
            <input
              type="number"
              {...register('year')}
              placeholder="Digite o ano do veículo"
            />
            <input
              type="text"
              {...register('color')}
              placeholder="Digite a color do veículo"
            />
            <input
              type="number"
              {...register('price')}
              placeholder="Digite o preço do veículo"
            />
            <Button type={"submit"}>Salvar</Button>
        </Form>
        </>
    )
}

export default FormComponent
