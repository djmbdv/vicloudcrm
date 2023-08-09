import { useField } from "formik";
import React from "react";

export type TextFieldProps = {
  label?: string;
  name: string;
  id?: string;
  [x: string]: string | boolean | undefined;
};
const TextField = (props: TextFieldProps): JSX.Element => {
  const [field, meta] = useField(props);
  const { id, name, label } = props;
  return (
    <div className="grid grid-cols-1 gap-6 p-1">
      <label className="block" htmlFor={id || name}>
        <span className="text-gray-700">{label}</span>
        <input
          type="text"
          className="form-input mt-1
                    text-gray-400
                    block
                    rounded-md
                    border-gray-300
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          {...field}
          {...props}
        />
      </label>
      {meta.touched && meta.error ? (
        <div className="error text-red-400 text-sm">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default TextField;
