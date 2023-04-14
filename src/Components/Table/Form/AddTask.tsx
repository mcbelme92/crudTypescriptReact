import { getInputs } from "../../../lib/getInputs";
import { FormLayout, Layout } from "../../Layout";
import { createUserApi } from "../../../api/Table";
import { useNavigate } from "react-router-dom";
import { SignUpFormType } from "../../../interface/Form";

export const AddTask = () => {
  let navigate = useNavigate();
  const signUpForm = getInputs<SignUpFormType>("edit");

  const onSubmit = async (data: object) => {
    const response = await createUserApi(data);
    navigate("/");
  };

  const initialValuesSignUp: SignUpFormType = {
    ...signUpForm.initialValues,
  };

  return (
    <div className="container_form">
      <Layout>
        <FormLayout
          {...signUpForm}
          initialValues={initialValuesSignUp}
          titleForm="Edita Informacion del usuario"
          onSubmit={onSubmit}
          labelButtonSubmit="Agregar"
          labelButtonSecondary="volver"
          linkCustomUrl="/"
        />
      </Layout>
    </div>
  );
};
