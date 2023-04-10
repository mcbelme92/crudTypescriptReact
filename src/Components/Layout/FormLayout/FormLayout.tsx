/* import { yupResolver } from "@hookform/resolvers/yup"; */
import { FormProvider, useForm } from "react-hook-form";
import { CustomInput } from "../FormLayout";
import { InputProps } from "../../../interface/Form";
import { Button, Form } from "react-bootstrap";

interface Props {
  onSubmit: (data: unknown) => void;
  labelButtonSubmit?: string;
  titleForm?: string;

  initialValues: unknown;
  /* validationSchema: SchemaForm */
  inputs: InputProps[];
}

export const FormLayout = ({ ...props }: Props) => {
  const {
    initialValues,
    inputs,
    onSubmit,

    titleForm,
    labelButtonSubmit = "Submit",
  } = props;

  const formMethods = useForm({
    defaultValues: { ...(initialValues as any) },
  });

  const createInputs = () =>
    inputs.map(({ typeValue, value, ...inputProps }) => {
      switch (inputProps.type) {
        /* case "select":
          return <CustomSelect {...inputProps} key={inputProps.name} />;
        case "checkbox":
          return <CustomCheckbox {...inputProps} key={inputProps.name} />;
        case "radio":
          return <CustomRadio {...inputProps} key={inputProps.name} />; */
        default:
          return <CustomInput {...inputProps} key={inputProps.name} />;
      }
    });

  return (
    <FormProvider {...formMethods}>
      <Form onSubmit={formMethods.handleSubmit(onSubmit)} className="form">
        {titleForm && <h5 className="form_title">{titleForm}</h5>}

        <section className="form_section_inputs">{createInputs()}</section>

        <Button variant="primary" className="form_submit_button" type="submit">
          {labelButtonSubmit}
        </Button>
      </Form>
    </FormProvider>
  );
};
