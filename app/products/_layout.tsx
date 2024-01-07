import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs, useRouter } from 'expo-router'
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { themeGlobal } from '../../styles/themeGlobal';
import { Slot } from 'expo-router'
import { Svg, Path, Circle } from 'react-native-svg';


const ProductsLayout = () => {
  const router = useRouter()

  const redirect = (route: string) => {
    router.push(route)
  }
  const back = () => {
    router.back()
  }
  return (
    <View>
      <View style={styles.navtop}>
        <TouchableOpacity onPress={() => back()}>
        <View style={styles.itemleftwrapper}>
          {/* Vigma RN:: can be replaced with <Itemleft state={"default"} /> */}
          <View style={styles.itemleft}>
            {/* Vigma RN:: can be replaced with <IconsOutlineArrow_back /> */}
            <View style={styles.iconsOutlineArrow_back}>
              <View style={styles.boundingbox} />
              
              <Svg style={styles.vector} width="14" height="14" viewBox="0 0 14 14" fill="none" >
                <Path d="M6.0625 13.0834L0.562499 7.58343C0.479165 7.50009 0.420138 7.40981 0.385415 7.31259C0.350693 7.21537 0.333332 7.1112 0.333332 7.00009C0.333332 6.88898 0.350693 6.78481 0.385415 6.68759C0.420138 6.59037 0.479165 6.50009 0.562499 6.41676L6.0625 0.916758C6.21528 0.76398 6.40625 0.684119 6.63542 0.677174C6.86458 0.67023 7.0625 0.750091 7.22917 0.916758C7.39583 1.06954 7.48264 1.26051 7.48958 1.48967C7.49653 1.71884 7.41667 1.91676 7.25 2.08342L3.16667 6.16676H12.4792C12.7153 6.16676 12.9132 6.24662 13.0729 6.40634C13.2326 6.56606 13.3125 6.76398 13.3125 7.00009C13.3125 7.2362 13.2326 7.43412 13.0729 7.59384C12.9132 7.75356 12.7153 7.83343 12.4792 7.83343H3.16667L7.25 11.9168C7.40278 12.0695 7.48264 12.264 7.48958 12.5001C7.49653 12.7362 7.41667 12.9306 7.25 13.0834C7.09722 13.2501 6.90278 13.3334 6.66667 13.3334C6.43055 13.3334 6.22917 13.2501 6.0625 13.0834Z" fill="#09111F" />
              </Svg>
              
            </View>
          </View>
        </View>
        </TouchableOpacity>
        <View style={styles.itemrightwrapper}>
          {/* Vigma RN:: can be replaced with <Itemright state={"default"} /> */}
          <View style={styles.itemright}>
            {/* Vigma RN:: can be replaced with <Icon /> */}
            <View style={styles.icon}>
              <View style={styles._boundingbox} />
              <Svg style={styles._vector} width="18" height="18" viewBox="0 0 18 18" fill="none" >
                <Path d="M5.83334 17.3332C5.37501 17.3332 4.98265 17.17 4.65626 16.8436C4.32987 16.5172 4.16668 16.1248 4.16668 15.6665C4.16668 15.2082 4.32987 14.8158 4.65626 14.4894C4.98265 14.163 5.37501 13.9998 5.83334 13.9998C6.29168 13.9998 6.68404 14.163 7.01043 14.4894C7.33682 14.8158 7.50001 15.2082 7.50001 15.6665C7.50001 16.1248 7.33682 16.5172 7.01043 16.8436C6.68404 17.17 6.29168 17.3332 5.83334 17.3332ZM14.1667 17.3332C13.7083 17.3332 13.316 17.17 12.9896 16.8436C12.6632 16.5172 12.5 16.1248 12.5 15.6665C12.5 15.2082 12.6632 14.8158 12.9896 14.4894C13.316 14.163 13.7083 13.9998 14.1667 13.9998C14.625 13.9998 15.0174 14.163 15.3438 14.4894C15.6701 14.8158 15.8333 15.2082 15.8333 15.6665C15.8333 16.1248 15.6701 16.5172 15.3438 16.8436C15.0174 17.17 14.625 17.3332 14.1667 17.3332ZM5.12501 3.99984L7.12501 8.1665H12.9583L15.25 3.99984H5.12501ZM5.83334 13.1665C5.20834 13.1665 4.73612 12.8922 4.41668 12.3436C4.09723 11.795 4.08334 11.2498 4.37501 10.7082L5.50001 8.6665L2.50001 2.33317H1.64584C1.40973 2.33317 1.21529 2.25331 1.06251 2.09359C0.909732 1.93387 0.833344 1.73595 0.833344 1.49984C0.833344 1.26373 0.913205 1.06581 1.07293 0.906087C1.23265 0.746365 1.43057 0.666504 1.66668 0.666504H3.02084C3.17362 0.666504 3.31945 0.708171 3.45834 0.791504C3.59723 0.874837 3.7014 0.992893 3.77084 1.14567L4.33334 2.33317H16.625C17 2.33317 17.257 2.47206 17.3958 2.74984C17.5347 3.02762 17.5278 3.31928 17.375 3.62484L14.4167 8.95817C14.2639 9.23595 14.0625 9.45123 13.8125 9.604C13.5625 9.75678 13.2778 9.83317 12.9583 9.83317H6.75001L5.83334 11.4998H15.0208C15.257 11.4998 15.4514 11.5797 15.6042 11.7394C15.757 11.8991 15.8333 12.0971 15.8333 12.3332C15.8333 12.5693 15.7535 12.7672 15.5938 12.9269C15.434 13.0866 15.2361 13.1665 15 13.1665H5.83334Z" fill="#09111F" />
              </Svg>
            </View>
            {/* Vigma RN:: can be replaced with <Badge type={"dot"} size={"small"} /> */}
            <View style={styles.badge}>
              <Svg style={styles.dot} width="6" height="6" viewBox="0 0 6 6" fill="none" >
                <Circle cx="3" cy="3" r="3" fill="#E50D24" />
              </Svg>
            </View>
          </View>
        </View>
      </View>
      <Slot></Slot>
    </View>

  )
}

export default ProductsLayout

const styles = StyleSheet.create({
  navtop: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 0,
    paddingVertical: 12,
    paddingHorizontal: 14
  },
  itemleftwrapper: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 0
  },
  itemleft: {
    flexShrink: 0,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 4,
    padding: 10,
    borderRadius: 9999
  },
  iconsOutlineArrow_back: {
    flexShrink: 0,
    height: 20,
    width: 20,
    alignItems: "flex-start",
    rowGap: 0
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
    top: 4,
    right: 4,
    bottom: 4,
    left: 3,
    overflow: "visible"
  },
  itemrightwrapper: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 0
  },
  itemright: {
    flexShrink: 0,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 4,
    padding: 10,
    borderRadius: 9999
  },
  icon: {
    flexShrink: 0,
    height: 20,
    width: 20,
    alignItems: "flex-start",
    rowGap: 0
  },
  _boundingbox: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  _vector: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    right: 3,
    bottom: 2,
    left: 1,
    overflow: "visible"
  },
  badge: {
    position: "absolute",
    flexShrink: 0,
    top: 7,
    height: 6,
    left: 27,
    width: 6,
    alignItems: "flex-start",
    rowGap: 0
  },
  dot: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: "visible"
  }
})
