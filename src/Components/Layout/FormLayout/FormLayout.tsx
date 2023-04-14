/* import { yupResolver } from "@hookform/resolvers/yup"; */
import { FormProvider, useForm } from "react-hook-form";
import { CustomInput } from "../FormLayout";
import { InputProps } from "../../../interface/FormDynamic";
import { Button, Form } from "react-bootstrap";
import { FormEvent } from "react";
import { Link } from "react-router-dom";

interface Props {
  onSubmit: (data: object) => void;
  labelButtonSubmit?: string;
  labelButtonSecondary?: string;
  titleForm?: string;
  linkCustomUrl?: string;
  initialValues: unknown;
  /* validationSchema: SchemaForm */
  inputs: InputProps[];
}
export const FormLayout = ({ ...props }: Props) => {
  const {
    initialValues,
    inputs,
    onSubmit,
    labelButtonSecondary,
    titleForm,
    labelButtonSubmit = "Submit",
    linkCustomUrl = "",
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

        {labelButtonSubmit && (
          <Button
            variant="primary"
            className="form_submit_button"
            type="submit"
          >
            {labelButtonSubmit}
          </Button>
        )}

        {labelButtonSecondary && (
          <Link to={linkCustomUrl}>
            <Button
              variant="primary"
              className="form_submit_button"
              type="submit"
            >
              {labelButtonSecondary}
            </Button>
          </Link>
        )}
      </Form>
    </FormProvider>
  );
};
