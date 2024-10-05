import { View } from "react-native";
import { AppHeader } from "../../atoms/header";
import { useRoute } from "@react-navigation/native";
import { ExchangeRouteProp } from "../../../routers/interfaces";

export const ExchangeDataPage = () => {
  const route = useRoute<ExchangeRouteProp<'exchange-data'>>();
  const { value } = route.params;
  console.log(value);
  return (
    <View className=" flex-1 bg-white">
      <AppHeader goBack close logo />
      <View className="flex-1 px-8 bg-white pb-6"></View>
    </View>
  );
};
