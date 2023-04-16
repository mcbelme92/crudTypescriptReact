import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FormLayout, Layout } from "../../Layout";
import { getInputs } from "../../../lib/getInputs";
import { SignUpFormType } from "../../../interface/Form";
import { useApiData } from "../../../hooks";
import { modifyUserApi } from "../../../api/Table";

const signUpForm = getInputs<SignUpFormType>("edit");

export const EditTask = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const idDataNumber = Number(id);
  const [formulario, setformulario] = useState({
    id: 0,
    name: "",
    age: 0,
    color: "",
    address: "",
  });
  const { data } = useApiData(formulario);

  const onSubmit2 = async (body: object) => {
    const paramms = { ...body, id: idDataNumber };
    const response = await modifyUserApi(paramms);
    navigate("/");
  };

  const dataPerKey = data?.find((i) => i?.id === idDataNumber);
  if (!dataPerKey) return null;

  const initialValuesSignUp: SignUpFormType = {
    ...signUpForm.initialValues,
    id: idDataNumber,
    name: dataPerKey.name,
    address: dataPerKey.address,
    age: Number(dataPerKey.age),
    color: dataPerKey.color,
  };

  return (
    <div>
      <Layout>
        <FormLayout
          {...signUpForm}
          initialValues={initialValuesSignUp}
          titleForm="Edita Informacion del usuario"
          onSubmit={onSubmit2}
          labelButtonSubmit="Editar"
          labelButtonSecondary="volver"
          linkCustomUrl="/"
        />
      </Layout>
    </div>
  );
};
