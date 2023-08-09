import { useField } from "formik";
import React from "react";

export type SelectFieldOption = { text: string; value: string };
export type SelectFieldProps = {
  options: SelectFieldOption[];
  label?: string;
  name: string;
  id?: string;
};
const SelectField = (props: SelectFieldProps): JSX.Element => {
  const [field, meta] = useField(props);
  const { label, options } = props;
  return (
    <div className="grid grid-cols-1 gap-6 p-1">
      <label className="block">
        <span className="text-gray-700">{label}</span>

        <select
          className="form-select mt-1
                    text-gray-400
                    block
                    rounded-md
                    border-gray-300
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          {...field}
          {...props}
        >
          {options.map(({ text, value }) => (
            <option key={value} value={value}>
              {text}
            </option>
          ))}
        </select>
      </label>
      {meta.touched && meta.error ? (
        <div className="error text-red-400">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default SelectField;
