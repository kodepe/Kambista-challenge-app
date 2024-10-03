import { SelectItemProps } from "../../components/molecules/select/interface";

export interface RegisterFormProps {
  fullName: string;
  documentType: SelectItemProps;
  documentNumber: string;
  phone: string;
  moneychanger: SelectItemProps;
  terms: boolean;
  policy: boolean;
}
