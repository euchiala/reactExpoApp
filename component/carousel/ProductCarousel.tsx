import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import { Svg, Circle } from "react-native-svg";
import Pagination from "../pagination/PaginationDots";

type ProductCarouselProps = {
  images: string[];
};

const ProductCarousel: React.FC<ProductCarouselProps> = ({ images }) => {
  return (
    <View style={styles.carousel}>
      <ImageBackground
        style={styles.image1}
        source={{
          uri: images[0] ?? "https://dummyimage.com/360x360/000/fff.jpg",
        }}
      />
      {/* Vigma RN:: can be replaced with <Pagination size={"small"} /> */}
      <View style={styles.paginationWrapper}>
        <Pagination />
      </View>
    </View>
  );
};

export default ProductCarousel;

const styles = StyleSheet.create({
  carousel: {
    alignSelf: "stretch",
    flexShrink: 0,
    height: 360,
    alignItems: "center",
    rowGap: 12,
  },
  image1: {
    alignSelf: "stretch",
    flexShrink: 0,
    height: 360,
  },
  paginationWrapper: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems:'center',
    bottom:0,
    width: "100%",
    marginBottom:12
  },
});
