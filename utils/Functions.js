import { Linking } from "react-native";

//Function to open links
export const onPressOpenLink = async (url) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Virheellinen osoite: ${url}`);
    }
  };