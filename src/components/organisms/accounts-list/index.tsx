import { Text, View } from "react-native";
import SelectInputDialog from "../../molecules/select";
import { useState } from "react";
import { AccountListStyleSheet } from "./styles";
import { ButtonPlus } from "../../atoms/button-plus";
import { useNavigation } from "@react-navigation/native";

export const AccountList = () => {
  const [val, setVal] = useState({ label: "", value: "" });
  const navigation = useNavigation();
  return (
    <View className="px-6 flex-1">
      <Text style={AccountListStyleSheet.title}>{"Cuentas"}</Text>
      <SelectInputDialog
        label=""
        value={val}
        data={[]}
        placeholder="Cuentas bancarias"
        setValue={(value) => {}}
      />
      <ButtonPlus onPress={() => navigation.navigate("register-accounts")} />
    </View>
  );
};
