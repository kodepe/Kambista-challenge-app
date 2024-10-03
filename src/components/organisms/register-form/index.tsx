import { ScrollView, View } from "react-native";
import Disclaimer from "../../molecules/disclaimer";
import Input from "../../molecules/Input";
import RegisterFormHeader from "../../molecules/headers/register-form-header/register-form-header";
import SelectInputDialog from "../../molecules/select";
import { DocumentsTypes, MoneyChangeTypes } from "../../../constants/mock";

const RegisterForm = () => {
  return (
    <ScrollView>
      <View className="flex-col">
        <RegisterFormHeader />
        <Input
          containerClassName="mb-4"
          label="Nombres completos"
          placeholer="Escribe tu nombre"
        />
        <View className=" flex-row items-center my-2 gap-4">
          <SelectInputDialog
            containerClassName={"flex-1"}
            label="Documento"
            placeholder="Seleccione"
            data={DocumentsTypes}
          />
          <Input
            containerClassName={"flex-1"}
            label="Número"
            placeholer="Número Doc"
          />
        </View>
        <Disclaimer />
        <Input
          containerClassName="mt-2 mb-6"
          label="Número de celular"
          placeholer="Número de celular"
        />
        <SelectInputDialog
          containerClassName={"flex-1"}
          label="¿Dónde cambiaste antes? (Opcional)"
          placeholder="Seleccione"
          data={MoneyChangeTypes}
        />
      </View>
    </ScrollView>
  );
};
export default RegisterForm;
