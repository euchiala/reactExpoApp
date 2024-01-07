import { StyleSheet, View, Text } from "react-native";
import React, { useEffect } from "react";
import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { getHeaderTitle } from "../../utils/getHeaderTitle";
import { useDispatch } from "react-redux";
import { service } from "../../service";
import NavTopLogo from "../../component/nav/NavTopLogo";
import Notification from "../../component/icons/Notification";
import NavTopRightIcon from "../../component/nav/NavTopRightIcon";

type CustomTabBarButtonProps = {
  label: string;
  icon: string;
  focused: boolean;
};

const CustomTabBarButton: React.FC<CustomTabBarButtonProps> = ({
  label,
  icon,
  focused,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: focused ? "#F0F2F5" : "none",
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 15,
      }}
    >
      <FontAwesome name={icon} color="black" size={15} />
      {focused && (
        <Text style={{ marginLeft: 8, fontWeight: "600" }}>{label}</Text>
      )}
    </View>
  );
};

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const retrieveProducts = async () => {
      const { data } = await service.products.productsList({
        skip: "0",
        take: "10",
      });
      console.log(data);
      dispatch({ type: "SET_PRODUCTS", payload: data.paginatedResult });
      return data;
    };
    retrieveProducts();
  }, []);
  return (
    <Tabs
      initialRouteName="profile"
      screenOptions={({ route }) => {
        const title = getHeaderTitle(route.name);
        return {
          header: () => {
            if (title == "Home")
              return <NavTopLogo icon={<Notification badge={true} />} />;
            else if(title != "Search")
              return (
                <View style={{ backgroundColor: "white" }}>
                  <NavTopRightIcon
                    title={title}
                    icon={<Notification badge={true} />}
                  />
                </View>
              );
          },
          tabBarStyle: { paddingHorizontal: 15 },
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ focused }) => {
            let iconName = "";

            if (route.name === "profile") {
              iconName = "user";
            } else if (route.name === "home") {
              iconName = "home";
            } else if (route.name === "search") {
              iconName = "search";
            } else if (route.name === "wishlist") {
              iconName = "heart";
            } else if (route.name === "cart") {
              iconName = "shopping-basket";
            }

            return (
              <CustomTabBarButton
                label={title}
                icon={iconName}
                focused={focused}
              />
            );
          },
        };
      }}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="search" />
      <Tabs.Screen name="cart" />
      <Tabs.Screen name="wishlist" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );    
};

export default Layout;

const styles = StyleSheet.create({});
