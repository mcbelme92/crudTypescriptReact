import { ChangeEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "../../../hooks/useForm";
import { User } from "../../../interface";
import "./AddTask.scss";
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
      {/* <div className="form2">
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <h3 style={{ color: "white" }}>Registrate ahora </h3>
            <Form.Label>Nombre </Form.Label>
            <Form.Control
              className="form-control"
              placeholder="Introduce tu nombre"
              name="name"
              value={name}
              onChange={handleChange}
              type="name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Edad</Form.Label>
            <Form.Control
              className="form-control"
              placeholder="Introduce tu edad"
              name="age"
              value={age}
              onChange={handleChange}
              type="age"
              pattern="[0-9]+"
              title="Este campo acepta solo numeros"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Color</Form.Label>
            <Form.Control
              placeholder="Selecciona tu color"
              name="color"
              value={color}
              onChange={handleChange}
              type="text"
            />
          </Form.Group>
          {JSON.stringify(formulario)}
        </Form>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button variant="secondary">volver</Button>
      </div> */}
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
