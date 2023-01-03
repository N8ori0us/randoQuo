import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity
  } from "react-native";
import { useState } from "react";
import { quotes } from "../shared/quotes";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { QuoteCard, HomeHeader, FocusedStatusBar } from "../components";


const Main = () => {
  let rand=Math.floor(Math.random() * quotes.length) - 1
  let randQuote = quotes[rand];
  
  const [loading, setLoading] = useState(true)
  const [quote, setQuote] = useState(randQuote);
  const [qArr, setQArr] = useState([])
  
  const handleSearch = (value) => {
    
    if(!value.length) setQuote(randQuote);
    
    const filteredData = quotes.filter((item) =>
      (item.Author||item.Quote||item.Category||[...item.Tags]).toLowerCase().includes(value.toLowerCase())
    );
    setQArr(filteredData)
    if(filteredData.length) {

      setQuote(...filteredData);
    } else {
      setQuote(randQuote);
    }
  };

  console.log();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 1 }}>
          <FlatList
            data={[quote]}
            renderItem={({ item }) => <QuoteCard data={item}/>}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader data={quote} onSearch={handleSearch}/>}
          />
        </View>
      </View>
      <View 
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth: 200,
        padding: SIZES.small,
        marginHorizontal:100,
        marginBottom: SIZES.small
      }}
      >
        <View>
          <TouchableOpacity onPress={() => setQuote(randQuote)}>
            <Text
              style={{
                fontFamily: FONTS.semiBold,
                color: COLORS.white,
                fontSize: 20,
                textAlign: "center",
              }}>
              Next Quote
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Main;
