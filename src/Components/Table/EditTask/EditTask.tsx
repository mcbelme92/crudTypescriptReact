import React, {
  ChangeEvent,
  ChangeEventHandler,
  EventHandler,
  FormEvent,
  HTMLProps,
  useEffect,
  useState,
} from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { FormLayout, Layout } from "../../Layout";
import { getInputs } from "../../../lib/getInputs";

interface SignUpFormType {
  name: string;
  age: number;
  color: string;
}
const signUpForm = getInputs<SignUpFormType>("edit");

export const EditTask = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    color: "",
  });

  const { name, age, color } = formData;

  const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.name);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    let body = { name, age, color };
    e.preventDefault();
    navigate("/");
  };
  const onSubmitSignUp = (data: unknown) => console.log({ singUp: data });

  const onSubmitAnotherForm = (data: unknown) => console.log({ another: data });

  const initialValuesSignUp: SignUpFormType = {
    ...signUpForm.initialValues,
  };
  return (
    <div>
      {/*  <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nombre </Form.Label>
          <Form.Control
            className="form-control"
            placeholder="Introduce tu nombre"
            name="name"
            value={name}
            onChange={onInputChange}
            type="name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="age">
          <Form.Label>Edad</Form.Label>
          <Form.Control
            className="form-control"
            placeholder="Introduce tu edad"
            name="age"
            value={age}
            onChange={onInputChange}
            type="age"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="color">
          <Form.Label>Color</Form.Label>
          <Form.Control
            placeholder="Selecciona tu color"
            name="color"
            value={color}
            onChange={onInputChange}
            type="text"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form> */}
      <Layout>
        <FormLayout
          {...signUpForm}
          initialValues={initialValuesSignUp}
          titleForm="Sign Up!"
          onSubmit={onSubmitSignUp}
          labelButtonSubmit="Create account"
        />
      </Layout>
    </div>
  );
};
