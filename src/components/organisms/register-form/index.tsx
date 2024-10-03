import { ScrollView, View, Text } from "react-native";
import Disclaimer from "../../molecules/disclaimer";
import Input from "../../molecules/Input";
import RegisterFormHeader from "../../molecules/headers/register-form-header/register-form-header";
import SelectInputDialog from "../../molecules/select";
import { DocumentsTypes, MoneyChangeTypes } from "../../../constants/mock";
import Checkbox from "../../molecules/checkbox";

import { RegisterFormStyleSheet } from "./styles";
import { UseRegister } from "../../../hooks/useRegister";

const RegisterForm = () => {
  const { form, setForm } = UseRegister();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="flex-col">
        <RegisterFormHeader />
        <Input
          value={form.fullName}
          onChangeText={(value) => {
            setForm({ ...form, fullName: value });
          }}
          containerClassName="mb-4"
          label="Nombres completos"
          placeholer="Escribe tu nombre"
        />
        <View className=" flex-row items-center my-2 gap-4">
          <SelectInputDialog
            value={form.documentType}
            setValue={(value) => {
              setForm({ ...form, documentType: value });
            }}
            containerClassName={"flex-1"}
            label="Documento"
            placeholder="Seleccione"
            data={DocumentsTypes}
          />
          <Input
            value={form.documentNumber}
            onChangeText={(value) => {
              setForm({ ...form, documentNumber: value });
            }}
            containerClassName={"flex-1"}
            label="Número"
            placeholer="Número Doc"
          />
        </View>
        <Disclaimer />
        <Input
          value={form.phone}
          onChangeText={(value) => {
            setForm({ ...form, phone: value });
          }}
          containerClassName="mt-2 mb-6"
          label="Número de celular"
          placeholer="Número de celular"
        />
        <SelectInputDialog
          value={form.moneychanger}
          setValue={(value) => {
            setForm({ ...form, moneychanger: value });
          }}
          containerClassName={"flex-1"}
          label="¿Dónde cambiaste antes? (Opcional)"
          placeholder="Seleccione"
          data={MoneyChangeTypes}
        />
        <View className="my-4">
          <Checkbox
            onPress={() => {
              setForm({ ...form, terms: !form.terms });
            }}
            value={form.terms}
            label={
              <Text>
                {"He leído y acepto los "}
                <Text style={RegisterFormStyleSheet.checkboxBold}>
                  Términos y condiciones
                </Text>
              </Text>
            }
          />
          <Checkbox
            value={form.policy}
            onPress={() => {
              setForm({ ...form, policy: !form.policy });
            }}
            label={
              <Text>
                {"Acepto de manera expresa e informada la "}
                <Text style={RegisterFormStyleSheet.checkboxBold}>
                  Política de Tratamiento de Datos personales de Kambista
                </Text>
              </Text>
            }
          />
        </View>
      </View>
    </ScrollView>
  );
};
export default RegisterForm;
