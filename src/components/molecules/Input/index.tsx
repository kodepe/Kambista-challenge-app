import { Text, TextInput } from "react-native-paper";
import { RegisterFormConfig } from "./configurations";
import { InputStyleSheet } from "./styles";
import { InputProps } from "./interface";
import { View } from "react-native";

const Input = ({
  onChangeText,
  placeholer,
  label,
  value,
  containerClassName,
}: InputProps) => {
  return (
    <View className={containerClassName}>
      <Text className="mb-2">{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholer}
        mode="outlined"
        className="rounded-xl"
        outlineStyle={InputStyleSheet.inputOutline}
        {...RegisterFormConfig}
      />
    </View>
  );
};
export default Input;
