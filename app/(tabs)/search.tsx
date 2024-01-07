import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { themeGlobal } from "../../styles/themeGlobal";
import { ScrollView } from "react-native-gesture-handler";
import ButtonViewMoreVertical from "../../component/button/ButtonViewMoreDown";
import NavtopSearch from "../../component/nav/NavTopSearch";
import ButtonTitleAction from "../../component/button/ButtonTitleAction";
import ButtonParameters from "../../component/button/ButtonParameters";
import Close from "../../component/icons/Close";

const Search = () => {
  const [searchItems, setSearchItems] = useState([
    "Search History Item 1",
    "Search History Item 2",
    "Search History Item 3",
    "Search History Item 4",
    "Search History Item 5",
    "Search History Item 6",
    "Search History Item 7",
  ]);
  
  const [showMoreStatus, setShowMoreStatus] = useState<"up" | "down">("up");
  const [numberToShow, setNumberToShow] = useState<number>(2);

  const handleClearThis = (index: number) => {
    const updatedSearchItems = [...searchItems];
    updatedSearchItems.splice(index, 1);
    setSearchItems(updatedSearchItems);
  };

  const handleClearAll = () => {
    setSearchItems([]);
  };
  const handleShowMore = () => {
    if (showMoreStatus == "up") {
      setShowMoreStatus("down");
      setNumberToShow(searchItems.length);
    } else {
      setShowMoreStatus("up");
      setNumberToShow(2);
    }
  };

  return (
    <View style={styles.searchScreen}>
      <View style={styles.navTopWrapper}>
        <NavtopSearch rightIcon={<></>} />
      </View>
      <View style={themeGlobal.baseStyles.container}>
        <ScrollView>
          <View style={styles.titleSectionWrapper}>
            <Text style={themeGlobal.themeTextGlobal.h5}> Room ideas</Text>
            <ButtonTitleAction title="Clear all" action={handleClearAll} />
          </View>
          <View style={styles.searchHistoryWrapper}>
            {searchItems.map((item, index) => {
              if (index <= numberToShow)
                return (
                  <View key={index}>
                    <ButtonParameters
                      title={item}
                      iconRight={<Close />}
                      icon=""
                      label=""
                      action={() => handleClearThis(index)}
                    />
                  </View>
                );
            })}
            {searchItems.length > 3 && (
              <ButtonViewMoreVertical
                status={showMoreStatus}
                buttonOnclick={handleShowMore}
              />
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchScreen: {
    backgroundColor: "white",
    display: "flex",
    height: "100%",
  },
  navTopWrapper: {
    paddingHorizontal: 24,
  },
  titleSectionWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
});
