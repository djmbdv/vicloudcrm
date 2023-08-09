import type { ButtonHTMLAttributes, FC } from "react";

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => (
  // eslint-disable-next-line react/button-has-type
  <button
    className="form-input m-1 bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
    {...props}
  >
    {children}
  </button>
);

export default Button;
