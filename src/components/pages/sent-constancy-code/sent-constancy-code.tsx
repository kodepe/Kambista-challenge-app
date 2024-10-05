import { View } from "react-native";
import { AppHeader } from "../../atoms/header";
import { SentConstancyFormCard } from "../../organisms/sent-constancy-form";

const SentConstancyCodePage = () => {
  return (
    <View className=" flex-1">
      <AppHeader logo />
      <View className="flex-1">
        <SentConstancyFormCard />
      </View>
    </View>
  );
};
export default SentConstancyCodePage;
