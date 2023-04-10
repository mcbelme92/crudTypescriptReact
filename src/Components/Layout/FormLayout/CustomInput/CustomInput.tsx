import { useFormContext } from "react-hook-form";
import { CustomInputProps } from "../../../../interface/Form";
/* import { ErrorMessage } from '../../components' */

export const CustomInput = ({ name, label, ...props }: CustomInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  /* const error = errors[name]?.message as string | undefined; */

  const id = `${name}-${props.type}-${label}`;

  return (
    <div className={"form_label_section"}>
      {label && (
        <label className="form_label_section_label" htmlFor={id}>
          {label}
        </label>
      )}

      <input
        className="form_label_section_input"
        {...register(name)}
        {...props}
        id={id}
      />

      {/* <ErrorMessage error={error} /> */}
    </div>
  );
};
