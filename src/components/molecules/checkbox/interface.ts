import { GestureResponderEvent } from "react-native";

export interface CheckboxProps {
  label?: React.ReactNode;
  value?: boolean;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
}
