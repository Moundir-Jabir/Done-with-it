import { StyleSheet, Text, View, Image } from "react-native";
import AppText from "./AppText";
import colors from "../styles/colors";

const ListItem = ({ image, title, subTitle }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 100,
  },
  textContainer: {
    paddingLeft: 10,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
  },
});
