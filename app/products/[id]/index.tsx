import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react' // Import useState
import { useLocalSearchParams } from 'expo-router'
import { service } from '../../../service'
import ProductCarousel from '../../../component/carousel/ProductCarousel'
import Promotion from '../../../component/icons/Promotion'
import ColorVariant from '../../../component/features/ColorVariant'
import { Svg, Line, Path } from 'react-native-svg';
import { Rating } from '../../../types/rating/Rating'
import ProductReview from '../../../component/productReview/ProductReview'
import ButtonViewMore from '../../../component/button/ButtonViewMore'

const SingleProduct = () => {
  const { id } = useLocalSearchParams()
  const [data, setData] = useState([]); // Use state to store data
  const [showAllDescription, setShowAllDescription] = useState(false);
  const [ratings] = useState<Rating[]>([
    {
      id: "1",
      username: "Leslie Alexander",
      color: "White",
      description:
        "Lorem ipsum dolor sit amet consectetur. Suspendisse ac velit aliquam suscipit volutpat eget.",
      images: [
        "../../assets/review/image 1.jpg",
        "../../assets/review/image 2.jpg",
        "../../assets/review/image 3.jpg",
        "../../assets/review/image 4.jpg",
      ],
      value: 5,
      imageAvatar:"../../assets/review/avatar.jpg",
    },
    {
      id: "2",
      username: "Username",
      color: "White",
      description:
        "Lorem ipsum dolor sit amet consectetur. Suspendisse ac velit aliquam suscipit volutpat eget.",
      value: 5,
      imageAvatar:"../../assets/review/avatar (1).jpg",
    },
    {
      id: "3",
      username: "Username",
      color: "White",
      description:
        "Lorem ipsum dolor sit amet consectetur. Suspendisse ac velit aliquam suscipit volutpat eget.",
      value: 4,
      imageAvatar:"../../assets/review/avatar (2).jpg",
    },
  ]);

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const { data } = await service.products.productsDetail(id);
        setData(data); // Set the data in the state
        console.log(data)
      } catch (error) {
        console.error('Error fetching single product:', error);
      }
    };

    getSingleProduct();
  }, [id]);

  const toggleDescription = () => {
    setShowAllDescription(!showAllDescription);
  };

  return (
    <View style={styles.contentView}>
      <ProductCarousel
        images={[data.image, data.image]}
      />
      <View style={styles.productDetail}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.price}>{data.price}</Text>
        <Text style={styles.promotion}>{data.promotion}</Text>
        <View style={styles.salesandactions}>
          <View style={styles.rating}>
            {/* Vigma RN:: can be replaced with <Badge type={"text"} size={"medium"} /> */}
            <View style={styles.badge}>
              <Text style={styles.label}>
                {`1.200 sold`}
              </Text>
            </View>
            {/* Vigma RN:: can be replaced with <Divider type={"vertical"} /> */}
            <View style={styles.divider}>
              <View style={styles.linewrapper}>
                <Svg style={styles.line} width="1" height="10" viewBox="0 0 1 10" fill="none" >
                  <Line x1="0.5" y1="2.18557e-08" x2="0.5" y2="10" stroke="#E1E5EB" />
                </Svg>
              </View>
              <View style={styles.linewrapper}>
                <Svg style={styles.line} width="1" height="10" viewBox="0 0 1 10" fill="none" >
                  <Line x1="0.5" y1="2.18557e-08" x2="0.5" y2="10" stroke="#E1E5EB" />
                </Svg>
              </View>
            </View>
            {/* Vigma RN:: can be replaced with <RatingProduct size={"medium"} /> */}
            <View style={styles.ratingProduct}>
              {/* Vigma RN:: can be replaced with <IconsFilledStar /> */}
              <View style={styles.iconsFilledStar}>
                <View style={styles.boundingbox} />
                <Svg style={styles.vector} width="16" height="15" viewBox="0 0 16 15" fill="none" >
                  <Path d="M8.05 12.5814L4.39032 14.786C4.22865 14.8889 4.05962 14.933 3.88325 14.9183C3.70688 14.9036 3.55256 14.8448 3.42028 14.7419C3.28801 14.639 3.18512 14.5104 3.11164 14.3561C3.03815 14.2018 3.02345 14.0291 3.06754 13.838L4.03758 9.67125L0.796777 6.87137C0.649802 6.73909 0.557942 6.58844 0.521198 6.41942C0.484455 6.2504 0.495478 6.08505 0.554268 5.92338C0.613058 5.76171 0.701243 5.62943 0.818823 5.52655C0.936403 5.42367 1.09808 5.35753 1.30384 5.32813L5.58082 4.95335L7.23429 1.02911C7.30778 0.85274 7.42168 0.720463 7.57601 0.632278C7.73033 0.544093 7.88833 0.5 8.05 0.5C8.21167 0.5 8.36967 0.544093 8.524 0.632278C8.67832 0.720463 8.79222 0.85274 8.86571 1.02911L10.5192 4.95335L14.7962 5.32813C15.0019 5.35753 15.1636 5.42367 15.2812 5.52655C15.3988 5.62943 15.4869 5.76171 15.5457 5.92338C15.6045 6.08505 15.6155 6.2504 15.5788 6.41942C15.5421 6.58844 15.4502 6.73909 15.3032 6.87137L12.0624 9.67125L13.0325 13.838C13.0766 14.0291 13.0619 14.2018 12.9884 14.3561C12.9149 14.5104 12.812 14.639 12.6797 14.7419C12.5474 14.8448 12.3931 14.9036 12.2167 14.9183C12.0404 14.933 11.8714 14.8889 11.7097 14.786L8.05 12.5814Z" fill="#FAB30F" />
                </Svg>
              </View>
              <Text style={styles.label}>
                {`4.8`}
              </Text>
            </View>
          </View>
          <View style={styles.actions}>
            {/* Vigma RN:: can be replaced with <Buttonwishlist type={"filledCircle"} color={"light"} size={"medium"} state={"default"} /> */}
            <View style={styles.buttonwishlist}>
              {/* Vigma RN:: can be replaced with <Icon /> */}
              <View style={styles.icon}>
                <View style={styles.boundingbox} />
                <Svg style={styles.vector} width="18" height="15" viewBox="0 0 18 15" fill="none" >
                  <Path d="M7.87499 14.3332L6.43749 13.0207C4.96527 11.6734 3.63541 10.3366 2.44791 9.01025C1.26041 7.68387 0.666656 6.22206 0.666656 4.62484C0.666656 3.31928 1.10416 2.229 1.97916 1.354C2.85416 0.479004 3.94443 0.0415039 5.24999 0.0415039C5.9861 0.0415039 6.68055 0.197754 7.33332 0.510254C7.9861 0.822754 8.54166 1.24984 8.99999 1.7915C9.45832 1.24984 10.0139 0.822754 10.6667 0.510254C11.3194 0.197754 12.0139 0.0415039 12.75 0.0415039C14.0555 0.0415039 15.1458 0.479004 16.0208 1.354C16.8958 2.229 17.3333 3.31928 17.3333 4.62484C17.3333 6.22206 16.743 7.68734 15.5625 9.02067C14.3819 10.354 13.0417 11.6943 11.5417 13.0415L10.125 14.3332C9.80555 14.6387 9.43055 14.7915 8.99999 14.7915C8.56943 14.7915 8.19444 14.6387 7.87499 14.3332ZM8.20832 3.45817C7.80555 2.88873 7.37499 2.4547 6.91666 2.15609C6.45832 1.85748 5.90277 1.70817 5.24999 1.70817C4.41666 1.70817 3.72221 1.98595 3.16666 2.5415C2.6111 3.09706 2.33332 3.7915 2.33332 4.62484C2.33332 5.34706 2.59027 6.11442 3.10416 6.92692C3.61805 7.73942 4.23263 8.52762 4.94791 9.2915C5.66318 10.0554 6.3993 10.7707 7.15624 11.4373C7.91318 12.104 8.52777 12.6526 8.99999 13.0832C9.47221 12.6526 10.0868 12.104 10.8437 11.4373C11.6007 10.7707 12.3368 10.0554 13.0521 9.2915C13.7674 8.52762 14.3819 7.73942 14.8958 6.92692C15.4097 6.11442 15.6667 5.34706 15.6667 4.62484C15.6667 3.7915 15.3889 3.09706 14.8333 2.5415C14.2778 1.98595 13.5833 1.70817 12.75 1.70817C12.0972 1.70817 11.5417 1.85748 11.0833 2.15609C10.625 2.4547 10.1944 2.88873 9.79166 3.45817C9.69443 3.59706 9.57638 3.70123 9.43749 3.77067C9.2986 3.84012 9.15277 3.87484 8.99999 3.87484C8.84721 3.87484 8.70138 3.84012 8.56249 3.77067C8.4236 3.70123 8.30555 3.59706 8.20832 3.45817Z" fill="#09111F" />
                </Svg>
              </View>
            </View>
            {/* Vigma RN:: can be replaced with <Buttonshare type={"filledCircle"} color={"light"} size={"medium"} state={"default"} /> */}
            <View style={styles.buttonshare}>
              {/* Vigma RN:: can be replaced with <_icon /> */}
              <View style={styles.icon}>
                <View style={styles.boundingbox} />
                <Svg style={styles.vector} width="16" height="18" viewBox="0 0 16 18" fill="none" >
                  <Path d="M13 17.3332C12.3056 17.3332 11.7153 17.0901 11.2292 16.604C10.7431 16.1179 10.5 15.5276 10.5 14.8332C10.5 14.7359 10.5069 14.6353 10.5208 14.5311C10.5347 14.4269 10.5556 14.3332 10.5833 14.2498L4.70833 10.8332C4.47222 11.0415 4.20833 11.2047 3.91667 11.3228C3.625 11.4408 3.31944 11.4998 3 11.4998C2.30556 11.4998 1.71528 11.2568 1.22917 10.7707C0.743056 10.2846 0.5 9.69428 0.5 8.99984C0.5 8.30539 0.743056 7.71512 1.22917 7.229C1.71528 6.74289 2.30556 6.49984 3 6.49984C3.31944 6.49984 3.625 6.55887 3.91667 6.67692C4.20833 6.79498 4.47222 6.95817 4.70833 7.1665L10.5833 3.74984C10.5556 3.6665 10.5347 3.57275 10.5208 3.46859C10.5069 3.36442 10.5 3.26373 10.5 3.1665C10.5 2.47206 10.7431 1.88178 11.2292 1.39567C11.7153 0.909559 12.3056 0.666504 13 0.666504C13.6944 0.666504 14.2847 0.909559 14.7708 1.39567C15.2569 1.88178 15.5 2.47206 15.5 3.1665C15.5 3.86095 15.2569 4.45123 14.7708 4.93734C14.2847 5.42345 13.6944 5.6665 13 5.6665C12.6806 5.6665 12.375 5.60748 12.0833 5.48942C11.7917 5.37137 11.5278 5.20817 11.2917 4.99984L5.41667 8.4165C5.44444 8.49984 5.46528 8.59359 5.47917 8.69775C5.49306 8.80192 5.5 8.90262 5.5 8.99984C5.5 9.09706 5.49306 9.19775 5.47917 9.30192C5.46528 9.40609 5.44444 9.49984 5.41667 9.58317L11.2917 12.9998C11.5278 12.7915 11.7917 12.6283 12.0833 12.5103C12.375 12.3922 12.6806 12.3332 13 12.3332C13.6944 12.3332 14.2847 12.5762 14.7708 13.0623C15.2569 13.5484 15.5 14.1387 15.5 14.8332C15.5 15.5276 15.2569 16.1179 14.7708 16.604C14.2847 17.0901 13.6944 17.3332 13 17.3332ZM13 3.99984C13.2361 3.99984 13.434 3.91998 13.5938 3.76025C13.7535 3.60053 13.8333 3.40262 13.8333 3.1665C13.8333 2.93039 13.7535 2.73248 13.5938 2.57275C13.434 2.41303 13.2361 2.33317 13 2.33317C12.7639 2.33317 12.566 2.41303 12.4062 2.57275C12.2465 2.73248 12.1667 2.93039 12.1667 3.1665C12.1667 3.40262 12.2465 3.60053 12.4062 3.76025C12.566 3.91998 12.7639 3.99984 13 3.99984ZM3 9.83317C3.23611 9.83317 3.43403 9.75331 3.59375 9.59359C3.75347 9.43387 3.83333 9.23595 3.83333 8.99984C3.83333 8.76373 3.75347 8.56581 3.59375 8.40609C3.43403 8.24637 3.23611 8.1665 3 8.1665C2.76389 8.1665 2.56597 8.24637 2.40625 8.40609C2.24653 8.56581 2.16667 8.76373 2.16667 8.99984C2.16667 9.23595 2.24653 9.43387 2.40625 9.59359C2.56597 9.75331 2.76389 9.83317 3 9.83317ZM13 15.6665C13.2361 15.6665 13.434 15.5866 13.5938 15.4269C13.7535 15.2672 13.8333 15.0693 13.8333 14.8332C13.8333 14.5971 13.7535 14.3991 13.5938 14.2394C13.434 14.0797 13.2361 13.9998 13 13.9998C12.7639 13.9998 12.566 14.0797 12.4062 14.2394C12.2465 14.3991 12.1667 14.5971 12.1667 14.8332C12.1667 15.0693 12.2465 15.2672 12.4062 15.4269C12.566 15.5866 12.7639 15.6665 13 15.6665Z" fill="#09111F" />
                </Svg>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.variantTitle}>
          <Text style={styles.variantSelect}>Select variation</Text>
          <Text style={styles.variantColor}>(3 colors)</Text>
        </View>
        <View style={styles.variant}>
          <ColorVariant color='black' title='black' />
          <ColorVariant color='gray' title='gray' />
          <ColorVariant color='white' title='white' />
        </View>
        <View style={styles.desc}>
          <Text style={styles.titleDesc}>Description</Text>
          <Text style={styles.contentDesc} numberOfLines={showAllDescription ? 0 : 2} > {data.description} </Text>
          {!showAllDescription && (
            <TouchableOpacity onPress={toggleDescription}>
              <View style={styles.buttonviewmore}>
                <View style={styles.textwrapper}>
                  <Text style={styles.viewMore}>
                    {`View more`}
                  </Text>
                </View>
                {/* Vigma RN:: can be replaced with <Icon /> */}
                <View style={styles.icon}>
                  <View style={styles.boundingbox} />
                  <Svg style={styles.vector} width="8" height="5" viewBox="0 0 8 5" fill="none" >
                    <Path d="M3.72536 4.37536C3.63647 4.37536 3.55314 4.36147 3.47536 4.3337C3.39758 4.30592 3.32536 4.2587 3.2587 4.19203L0.175362 1.1087C0.0531401 0.986473 -0.00519324 0.833696 0.000362319 0.650362C0.00591788 0.467029 0.0698068 0.314251 0.192029 0.192029C0.314251 0.0698068 0.469807 0.00869565 0.658696 0.00869565C0.847585 0.00869565 1.00314 0.0698068 1.12536 0.192029L3.72536 2.79203L6.34203 0.175362C6.46425 0.0531401 6.61703 -0.00519324 6.80036 0.000362319C6.9837 0.00591788 7.13647 0.0698068 7.2587 0.192029C7.38092 0.314251 7.44203 0.469807 7.44203 0.658696C7.44203 0.847585 7.38092 1.00314 7.2587 1.12536L4.19203 4.19203C4.12536 4.2587 4.05314 4.30592 3.97536 4.3337C3.89758 4.36147 3.81425 4.37536 3.72536 4.37536Z" fill="#09111F" />
                  </Svg>
                </View>
              </View>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.allReviews}>
          <Text>{`Reviews`}</Text>
          {ratings.map((rating, index: number) => {
            return (
              <View key={index}>
                <ProductReview {...rating} />
              </View>
            );
          })}
          <View>
            <ButtonViewMore
              title="View all reviews"
              buttonLink="/ratings"
            />
          </View>
        </View>
      </View>
    </View>
  )
}

export default SingleProduct

const styles = StyleSheet.create({
  contentView: {
    top: -64,
    zIndex: -1
  },
  title: {
    fontSize: 30,
    color: "rgba(9, 17, 31, 1)",
    fontWeight: "500"
  },
  productDetail: {
    marginTop: 20,
    marginLeft: 20,
    display: "flex",
    flexDirection: "column"
  },
  price: {
    fontSize: 28,
    color: "rgba(9, 17, 31, 1)",
    fontWeight: "500"
  },
  promotion: {
    fontSize: 17,
    color: "rgba(9, 17, 31, 1)",
    fontWeight: "300",
    textDecorationLine: "line-through"
  },
  variant: {
    display: "flex",
    gap: 10,
    flexDirection:"row"
  },
  variantTitle: {
    display: "flex",
    gap: 10,
    alignItems: "center",
    marginBottom: 20
  },
  variantSelect: {
    fontSize: 28,
    color: "rgba(9, 17, 31, 1)",
    fontWeight: "500"
  },
  variantColor: {
    fontSize: 17,
    color: "rgba(9, 17, 31, 1)",
    fontWeight: "300",
  },
  salesandactions: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 0
  },
  rating: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 0
  },
  badge: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 0,
    borderRadius: 4
  },
  label: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(76, 89, 112, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 20
  },
  divider: {
    flexShrink: 0,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    rowGap: 0
  },
  linewrapper: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    width: 24,
    alignItems: "flex-start",
    rowGap: 0,
    paddingVertical: 0,
    paddingHorizontal: 12
  },
  line: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    width: 10,
    overflow: "visible"
  },
  ratingProduct: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 4
  },
  iconsFilledStar: {
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
    left: 0
  },
  vector: {
    position: "absolute",
    flexShrink: 0,
    top: 3,
    right: 2,
    bottom: 3,
    left: 3,
    overflow: "visible"
  },
  actions: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 0
  },
  buttonwishlist: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 0,
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
  buttonshare: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 0,
    padding: 10,
    borderRadius: 9999
  },
  desc: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    marginTop: 20,
    marginBottom: 16,
  },
  titleDesc: {
    fontSize: 28,
    color: "rgba(9, 17, 31, 1)",
    fontWeight: "500"
  },
  contentDesc: {
    color: 'rgba(76, 89, 112, 1)',
    fontSize: 22,
    fontWeight: "300"
  },
  viewMore: {
    marginTop: 8,
    textAlign: 'center',
    flexShrink: 0,
    color: "rgba(9, 17, 31, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 16
  },
  buttonviewmore: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 0,
    paddingVertical: 1,
    paddingHorizontal: 0
  },
  textwrapper: {
    flexShrink: 0,
    paddingTop: 0,
    paddingBottom: 2,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 0,
    paddingHorizontal: 0
  },
  allReviews:{
    gap:20
  }
})
