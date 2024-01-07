import { useRouter } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";

type ButtonParametersProps = {
  title: string;
  icon: string;
  label: string;
  buttonLink: string;
};

const ButtonParameters: React.FC<ButtonParametersProps> = ({
  icon,
  label,
  title,
  buttonLink,
}) => {
  const router = useRouter();
  return (
    <View style={styles.buttonParameters}>
      <View style={styles.titleWrapper}>
        <View style={styles.iconsOutlineFavorite}>
          <Svg
            style={styles.vector}
            width="18"
            height="15"
            viewBox="0 0 18 15"
            fill="none"
          >
            <Path d={icon} fill="#09111F" />
          </Svg>
        </View>
        <View style={styles.text}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.itemright}
        onPress={() => router.push(buttonLink)}
      >
        <View style={styles.badgewrapper}>
          <View style={styles.badge}>
            <Text style={styles.label}>{label}</Text>
          </View>
        </View>
        <View style={styles.iconright}>
          <View style={styles._boundingbox} />
          <Svg
            style={styles._vector}
            width="7"
            height="10"
            viewBox="0 0 7 10"
            fill="none"
          >
            <Path
              d="M1.08329 9.41666C0.930515 9.26388 0.854126 9.06943 0.854126 8.83332C0.854126 8.59721 0.930515 8.40277 1.08329 8.24999L4.33329 4.99999L1.08329 1.74999C0.930515 1.59721 0.854126 1.40277 0.854126 1.16666C0.854126 0.930545 0.930515 0.736101 1.08329 0.583323C1.23607 0.430545 1.43051 0.354156 1.66663 0.354156C1.90274 0.354156 2.09718 0.430545 2.24996 0.583323L6.08329 4.41666C6.16663 4.49999 6.22565 4.59027 6.26038 4.68749C6.2951 4.78471 6.31246 4.88888 6.31246 4.99999C6.31246 5.1111 6.2951 5.21527 6.26038 5.31249C6.22565 5.40971 6.16663 5.49999 6.08329 5.58332L2.24996 9.41666C2.09718 9.56943 1.90274 9.64582 1.66663 9.64582C1.43051 9.64582 1.23607 9.56943 1.08329 9.41666Z"
              fill="#09111F"
            />
          </Svg>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default ButtonParameters;
const styles = StyleSheet.create({
  buttonParameters: {
    alignSelf: "stretch",
    flexShrink: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
    justifyContent: "space-between",
    marginBottom: 20,
  },
  titleWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  iconsOutlineFavorite: {
    flexShrink: 0,
    height: 20,
    width: 20,
    alignItems: "flex-start",
    rowGap: 0,
  },
  boundingbox: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    // backgroundColor: "rgba(217, 217, 217, 1)"
  },
  vector: {
    position: "absolute",
    flexShrink: 0,
    top: 3,
    right: 2,
    bottom: 2,
    left: 2,
    overflow: "visible",
  },
  text: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: "flex-start",
    justifyContent: "center",
    rowGap: 0,
  },
  title: {
    alignSelf: "stretch",
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(9, 17, 31, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 20,
  },
  itemright: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 0,
  },
  badgewrapper: {
    flexShrink: 0,
    paddingLeft: 0,
    paddingRight: 4,
    alignItems: "flex-start",
    justifyContent: "center",
    rowGap: 0,
    paddingVertical: 0,
  },
  badge: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 0,
    borderRadius: 4,
  },
  label: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(76, 89, 112, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 16,
  },
  iconright: {
    flexShrink: 0,
    height: 20,
    width: 20,
    alignItems: "flex-start",
    rowGap: 0,
  },
  _boundingbox: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    // backgroundColor: "rgba(217, 217, 217, 1)"
  },
  _vector: {
    position: "absolute",
    flexShrink: 0,
    top: 5,
    right: 7,
    bottom: 5,
    left: 8,
    overflow: "visible",
  },
  buttonsignup: {
    alignSelf: "stretch",
    flexShrink: 0,
    backgroundColor: "rgba(9, 17, 31, 1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 4,
    padding: 10,
    borderRadius: 12,
    marginBottom: 24,
  },
  textwrapper: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 0,
    paddingVertical: 0,
    paddingHorizontal: 4,
  },
});
