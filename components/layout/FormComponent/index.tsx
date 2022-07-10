import Button from "../Button"
import Form from "./styles"
import { useForm } from "react-hook-form"

const FormComponent = (props: any) => {
    const { register, handleSubmit } = useForm()

    return (
        <>
         <Form onSubmit={handleSubmit(props.handleSubmit)}>
            <label>
              Nome
             </label>
            <input
              type="text"
              {...register('name')}
              placeholder="Digite o nome do veículo"
            />
            <label>
              Descrição
            </label>
            <input
              type="text"
              {...register('description')}
              placeholder="Digite a descrição do veículo"
            />
            <label>
              Placa
            </label>
            <input
              type="text"
              {...register('plate')}
              placeholder="Digite a placa"
            />
            <label>
              Ano
            </label>
            <input
              type="number"
              {...register('year')}
              placeholder="Digite o ano do veículo"
            />
            <label>
              Cor
            </label>
            <input
              type="text"
              {...register('color')}
              placeholder="Digite a color do veículo"
            />
            <label>
              Preço
            </label>
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
