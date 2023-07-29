import { StatusBar } from "react-native";
import ViewImageScreen from "./src/screens/ViewImageScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";

export default function App() {
  return (
    <>
      <ViewImageScreen />
      <StatusBar barStyle={"light-content"} />
    </>
  );
}
