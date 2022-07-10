import Link from "next/link"
import FormComponent from "../layout/FormComponent"
import FormBox from "./styles"

const Form = (props: any) => {
  return (
  <>
    <Link href='/'><img src="ArrowIcon.png" width={'30px'} /></Link><FormBox></FormBox>
    <FormBox>
      <FormComponent handleSubmit={props.handleSubmit} />
    </FormBox>
   </>
  )
}

export default Form
