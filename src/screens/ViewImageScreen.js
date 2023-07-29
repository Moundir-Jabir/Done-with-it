import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  Platform,
  StatusBar,
} from "react-native";

import colors from "../styles/colors";

const ViewImageScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.btnContainer}>
        <View style={[styles.btn, styles.closeIcon]}></View>
        <View style={[styles.btn, styles.deleteIcon]}></View>
      </View>
      <Image
        source={require("../assets/chair.jpg")}
        resizeMode="contain"
        style={styles.image}
      />
    </SafeAreaView>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  image: {
    width: "100%",
  },
  btnContainer: {
    position: "absolute",
    top: 0,
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    width: "100%",
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  btn: {
    width: 50,
    height: 50,
  },
  closeIcon: {
    backgroundColor: colors.red,
  },
  deleteIcon: {
    backgroundColor: colors.green,
  },
});
