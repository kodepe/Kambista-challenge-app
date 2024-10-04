import { useState } from "react";
import {
  RegisterAccountErrorsDefault,
  RegisterAccountFormDefault,
} from "./constants";
import {
  RegisterAccountsErrorProps,
  RegisterAccountsFormProps,
} from "./interface";

export const UseRegisterAccount = () => {
  const [form, setForm] = useState<RegisterAccountsFormProps>(
    RegisterAccountFormDefault
  );
  const [errors, setErrors] = useState<RegisterAccountsErrorProps>(
    RegisterAccountErrorsDefault
  );
  const submit = () => {};
  const handlerMoney = (value: string) => {
    console.log(value);
    setForm({ ...form, moneyType: value });
  };
  return { form, setForm, errors, setErrors, submit, handlerMoney };
};
