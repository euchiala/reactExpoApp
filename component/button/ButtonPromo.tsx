import { router } from "expo-router";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Path, Svg } from "react-native-svg";

const ButtonPromo = ({ }) => {
  return (
    <TouchableOpacity onPress={() => router.push("/promo")}>
      <View style={styles.notification}>
        {/* Vigma RN:: can be replaced with <Iconfilled  /> */}
        <View style={styles.iconfilled}>
          <Svg style={styles.vectorStroke} width="16" height="16" viewBox="0 0 16 16" fill="none" >
            <Path fillRule="evenodd" clipRule="evenodd" d="M3.41667 2.16685C2.72631 2.16685 2.16667 2.72649 2.16667 3.41685C2.16667 4.10721 2.72631 4.66685 3.41667 4.66685C4.10702 4.66685 4.66667 4.10721 4.66667 3.41685C4.66667 2.72649 4.10702 2.16685 3.41667 2.16685ZM0.5 3.41685C0.5 1.80602 1.80584 0.500183 3.41667 0.500183C5.0275 0.500183 6.33333 1.80602 6.33333 3.41685C6.33333 5.02768 5.0275 6.33352 3.41667 6.33352C1.80584 6.33352 0.5 5.02768 0.5 3.41685ZM13.2441 1.57759C13.5695 1.25216 14.0972 1.25216 14.4226 1.57759C14.748 1.90303 14.748 2.43067 14.4226 2.75611L2.75592 14.4228C2.43049 14.7482 1.90285 14.7482 1.57741 14.4228C1.25197 14.0973 1.25197 13.5697 1.57741 13.2443L13.2441 1.57759ZM12.5833 11.3335C11.893 11.3335 11.3333 11.8932 11.3333 12.5835C11.3333 13.2739 11.893 13.8335 12.5833 13.8335C13.2737 13.8335 13.8333 13.2739 13.8333 12.5835C13.8333 11.8932 13.2737 11.3335 12.5833 11.3335ZM9.66667 12.5835C9.66667 10.9727 10.9725 9.66685 12.5833 9.66685C14.1942 9.66685 15.5 10.9727 15.5 12.5835C15.5 14.1943 14.1942 15.5002 12.5833 15.5002C10.9725 15.5002 9.66667 14.1943 9.66667 12.5835Z" fill="black" />
          </Svg>

        </View>
        <Text style={styles.label}>
          {`Promo`}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default ButtonPromo;
const styles = StyleSheet.create({
  notification: {
    flexShrink: 0,
    paddingLeft: 10,
    paddingRight: 14,
    backgroundColor: "rgb(225 224 224)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 4,
    paddingVertical: 10,
    borderRadius: 9999
  },
  iconfilled: {
    flexShrink: 0,
    height: 20,
    width: 20,
    alignItems: "flex-start",
    rowGap: 0
  },
  vectorStroke: {
    position: "absolute",
    flexShrink: 0,
    top: 3,
    right: 2,
    bottom: 2,
    left: 3,
    overflow: "visible"
  },
  label: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(9, 17, 31, 1)",
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 20
  }
});
