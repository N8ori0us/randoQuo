import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from "react-native";
import { useState } from "react";
import { quotes } from "../shared/quotes";
import FocusedStatusBar from "../components/FocusedStatusBar";
import { assets, COLORS, FONTS, SIZES } from "../constants";
import HomeHeader from "../components/HomeHeader";
import QuoteCard from "../components/QuoteCard";
import { RectButton } from "../components/Button";


const Main = () => {
  let rand = quotes[Math.floor(Math.random() * quotes.length) - 1];
  
  const [quote, setQuote] = useState(rand);
  
  const handleSearch = (value) => {
    if(!value.length) setQuote(quotes);
    

    const filteredData = quotes.filter((item) =>
      (item.Author||item.Category||[...item.Tags]).toLowerCase().includes(value.toLowerCase().toString())
    );

    if(filteredData.length) {
      setQuote([filteredData]);
    } else {
      setQuote(rand);
    }
  };


  console.log(quote);
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
      <View onPress={() => setQuote(rand)}>
        <View>
          <Text>Next Quote</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Main;
