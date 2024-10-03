import React, { useState } from "react";
import { View } from "react-native";
import {
  TextInput,
  Button,
  Dialog,
  Portal,
  List,
  Text,
} from "react-native-paper";
import Entypo from "@expo/vector-icons/Entypo";
import { RegisterFormConfig } from "../Input/configurations";
import { InputStyleSheet } from "../Input/styles";
import { SelectProps } from "./interface";

const SelectInputDialog = ({
  placeholder,
  data,
  label,
  containerClassName,
}: SelectProps) => {
  const [visible, setVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    label: "",
    value: "",
  });

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <View className={containerClassName}>
      <Text className="mb-2">{label}</Text>
      <TextInput
        mode="outlined"
        value={selectedOption.label}
        placeholder={placeholder}
        className="rounded-xl"
        outlineStyle={InputStyleSheet.inputOutline}
        {...RegisterFormConfig}
        onFocus={showDialog}
        right={<Entypo name="chevron-down" size={24} color="black" />}
        editable={false}
        onPress={showDialog}
      />

      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Seleccionar Opción</Dialog.Title>
          <Dialog.Content>
            {data?.map((item) => (
              <List.Item
                key={item.value}
                title={item.label}
                onPress={() => {
                  setSelectedOption(item);
                  hideDialog();
                }}
              />
            ))}
          </Dialog.Content>
        </Dialog>
      </Portal>
    </View>
  );
};

export default SelectInputDialog;
