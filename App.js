import { StatusBar, View } from "react-native";

import ViewImageScreen from "./src/screens/ViewImageScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import colors from "./src/styles/colors";
import Card from "./src/components/Card";
import ListingDetailScreen from "./src/screens/ListingDetailScreen";

export default function App() {
  return (
    <>
      <ViewImageScreen />
      <StatusBar barStyle={"dark-content"} />
    </>
  );
}
