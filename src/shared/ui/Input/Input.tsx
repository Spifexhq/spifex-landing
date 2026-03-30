import { forwardRef } from "react";
import type { TextInputProps } from "./Input.types";

import TextInput from "./TextInput";

const Input = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  return <TextInput {...props} ref={ref} />;
});

Input.displayName = "Input";
export default Input;