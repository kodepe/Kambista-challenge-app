import { Text, View } from "react-native";
import { AppHeader } from "../../atoms/header";

const HomePage = () => {
  return (
    <View>
      <AppHeader goBack={() => {}} close={() => {}} logo />
      <Text>Home Page</Text>
    </View>
  );
};
export default HomePage;
