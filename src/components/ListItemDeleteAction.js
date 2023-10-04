import { View, StyleSheet } from "react-native";
import colors from "../styles/colors";

const ListItemDeleteAction = () => {
  return <View style={styles.container}></View>;
};

export default ListItemDeleteAction;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
  },
});
