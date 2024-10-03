import { RegisterFormProps } from "./interface";

export const RegisterFormDefault: RegisterFormProps = {
  documentNumber: "",
  documentType: {
    label: "",
    value: "",
  },
  fullName: "",
  phone: "",
  policy: false,
  terms: false,
  moneychanger: {
    label: "",
    value: "",
  },
};
