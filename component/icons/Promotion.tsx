import React from "react";
import { View, StyleSheet } from "react-native";
import { Svg, Path } from "react-native-svg";

export default function Promotion() {
  return (
    <View style={styles.iconsOutlineSell}>
      <View style={styles.boundingbox} />
      <Svg
        style={styles.vector}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <Path
          d="M12.25 19.4C11.8667 19.7833 11.3917 19.975 10.825 19.975C10.2583 19.975 9.78333 19.7833 9.4 19.4L0.6 10.6C0.416667 10.4167 0.270833 10.2 0.1625 9.95C0.0541667 9.7 0 9.43333 0 9.15V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H9.15C9.43333 0 9.7 0.0541667 9.95 0.1625C10.2 0.270833 10.4167 0.416667 10.6 0.6L19.4 9.425C19.7833 9.80833 19.975 10.2792 19.975 10.8375C19.975 11.3958 19.7833 11.8667 19.4 12.25L12.25 19.4ZM10.825 18L17.975 10.85L9.15 2H2V9.15L10.825 18ZM4.5 6C4.91667 6 5.27083 5.85417 5.5625 5.5625C5.85417 5.27083 6 4.91667 6 4.5C6 4.08333 5.85417 3.72917 5.5625 3.4375C5.27083 3.14583 4.91667 3 4.5 3C4.08333 3 3.72917 3.14583 3.4375 3.4375C3.14583 3.72917 3 4.08333 3 4.5C3 4.91667 3.14583 5.27083 3.4375 5.5625C3.72917 5.85417 4.08333 6 4.5 6Z"
          fill="#08C754"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  iconsOutlineSell: {
    flexShrink: 0,
    height: 24,
    width: 24,
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
  },
  vector: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    right: 2,
    bottom: 2,
    left: 2,
    overflow: "visible",
  },
});
