import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Slot, Tabs, useRouter } from 'expo-router'
import { FontAwesome } from "@expo/vector-icons";
import { themeGlobal } from '../../styles/themeGlobal';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Logo from '../../component/ui/Logo';
import { useDispatch } from 'react-redux';
import { service } from '../../service';
import { Svg, Line, Path, Mask, G } from 'react-native-svg';
import ButtonPromo from '../../component/button/ButtonPromo';


const PromoLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const retrieveProducts = async () => {
      const { data } = await service


        .products.productsList({
          skip: "0",
          take: "10",
        });
      console.log(data);
      dispatch({ type: "SET_PRODUCTS", payload: data.paginatedResult });
      console.log(data);
      return data;
    };
    retrieveProducts();
  }, []);
  const router = useRouter()
  const redirect = (route: string) => {
    router.push(route)
  }
  const back = () => {
    router.back()
  }
  return (

       <View style={{ margin: '15px' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <TouchableOpacity onPress={() => back()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <mask id="mask0_8082_2989" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                <rect width="20" height="20" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_8082_2989)">
                <path d="M9.06254 16.0833L3.56254 10.5833C3.47921 10.5 3.42018 10.4097 3.38546 10.3125C3.35074 10.2153 3.33337 10.1111 3.33337 10C3.33337 9.88889 3.35074 9.78472 3.38546 9.6875C3.42018 9.59028 3.47921 9.5 3.56254 9.41667L9.06254 3.91667C9.21532 3.76389 9.40629 3.68403 9.63546 3.67708C9.86462 3.67014 10.0625 3.75 10.2292 3.91667C10.3959 4.06944 10.4827 4.26042 10.4896 4.48958C10.4966 4.71875 10.4167 4.91667 10.25 5.08333L6.16671 9.16667H15.4792C15.7153 9.16667 15.9132 9.24653 16.073 9.40625C16.2327 9.56597 16.3125 9.76389 16.3125 10C16.3125 10.2361 16.2327 10.434 16.073 10.5938C15.9132 10.7535 15.7153 10.8333 15.4792 10.8333H6.16671L10.25 14.9167C10.4028 15.0694 10.4827 15.2639 10.4896 15.5C10.4966 15.7361 10.4167 15.9306 10.25 16.0833C10.0973 16.25 9.90282 16.3333 9.66671 16.3333C9.4306 16.3333 9.22921 16.25 9.06254 16.0833Z" fill="#09111F" />
              </g>
            </svg>
          </TouchableOpacity>
            <View style={styles.notificationAndPromo}>
            <TouchableOpacity onPress={() => redirect("/promo")}>
              <ButtonPromo></ButtonPromo>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => redirect("/all")}>
              <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <Mask id="mask0_8082_1593" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                  <rect width="20" height="20" fill="#D9D9D9" />
                </Mask>
                <G mask="url(#mask0_8082_1593)">
                  <Path d="M4.16665 15.8333C3.93054 15.8333 3.73262 15.7535 3.5729 15.5937C3.41317 15.434 3.33331 15.2361 3.33331 15C3.33331 14.7639 3.41317 14.566 3.5729 14.4062C3.73262 14.2465 3.93054 14.1667 4.16665 14.1667H4.99998V8.33332C4.99998 7.18055 5.3472 6.15624 6.04165 5.26041C6.73609 4.36457 7.63887 3.77777 8.74998 3.49999V2.91666C8.74998 2.56943 8.87151 2.2743 9.11456 2.03124C9.35762 1.78818 9.65276 1.66666 9.99998 1.66666C10.3472 1.66666 10.6423 1.78818 10.8854 2.03124C11.1285 2.2743 11.25 2.56943 11.25 2.91666V3.49999C12.3611 3.77777 13.2639 4.36457 13.9583 5.26041C14.6528 6.15624 15 7.18055 15 8.33332V14.1667H15.8333C16.0694 14.1667 16.2673 14.2465 16.4271 14.4062C16.5868 14.566 16.6666 14.7639 16.6666 15C16.6666 15.2361 16.5868 15.434 16.4271 15.5937C16.2673 15.7535 16.0694 15.8333 15.8333 15.8333H4.16665ZM9.99998 18.3333C9.54165 18.3333 9.14929 18.1701 8.8229 17.8437C8.49651 17.5174 8.33331 17.125 8.33331 16.6667H11.6666C11.6666 17.125 11.5035 17.5174 11.1771 17.8437C10.8507 18.1701 10.4583 18.3333 9.99998 18.3333ZM6.66665 14.1667H13.3333V8.33332C13.3333 7.41666 13.0069 6.63193 12.3541 5.97916C11.7014 5.32638 10.9166 4.99999 9.99998 4.99999C9.08331 4.99999 8.29859 5.32638 7.64581 5.97916C6.99304 6.63193 6.66665 7.41666 6.66665 8.33332V14.1667Z" fill="#09111F" />
                </G>
              </Svg>
            </TouchableOpacity>
            </View>
          </View>
          <Slot></Slot>
        </View>

  )
}

export default PromoLayout

const styles = StyleSheet.create({
    notificationAndPromo:{
      display:"flex",
      alignItems:"center",
      gap:10,
      flexDirection:"row"
    }
})