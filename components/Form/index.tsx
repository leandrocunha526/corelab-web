import FormComponent from "../layout/FormComponent"
import FormBox from "./styles"

const Form = (props: any) => {
  return (
    <FormBox>
      <FormComponent handleSubmit={props.handleSubmit} />
    </FormBox>
  )
}

export default Form
