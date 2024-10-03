import { useState } from "react";
import { RegisterFormDefault } from "./constants";
import { RegisterFormProps } from "./interface";

export const UseRegister = () => {
  const [form, setForm] = useState<RegisterFormProps>(RegisterFormDefault);
  const validateFields = () => {};
  return { form, setForm };
};
