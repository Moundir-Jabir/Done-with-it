import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";

import colors from "../styles/colors";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.container}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={styles.placeholderContainer}>
        <View style={[styles.placeholder, styles.loginButton]}></View>
        <View style={[styles.placeholder, styles.registerButton]}></View>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  placeholderContainer: {
    width: "100%",
  },
  placeholder: {
    height: 70,
  },
  loginButton: {
    backgroundColor: colors.red,
  },
  registerButton: {
    backgroundColor: colors.green,
  },
});
