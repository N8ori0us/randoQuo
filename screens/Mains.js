import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { quotes } from "../shared/quotes";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { QuoteCard, HomeHeader, FocusedStatusBar } from "../components";

const Main = () => {
  const quotesMap = new Map(); // Create a Map to store quote objects

  for (const quote of quotes) {
    // If the Map already contains the quote value, add the new values to the existing object
    if (quotesMap.has(quote.Quote)) {
      const existingQuote = quotesMap.get(quote.Quote);
      existingQuote.Author = existingQuote.Author.includes(quote.Author)
        ? existingQuote.Author
        : `${existingQuote.Author}, ${quote.Author}`;
      existingQuote.Category = existingQuote.Category.includes(quote.Category)
        ? existingQuote.Category
        : `${existingQuote.Category}, ${quote.Category}`;
      existingQuote.Tags = [...new Set([...existingQuote.Tags, ...quote.Tags])];
    }
    // Otherwise, add the quote object to the Map
    else {
      quotesMap.set(quote.Quote, quote);
    }
  }

  const combQuotes = [...quotesMap.values()]; // Convert the Map to an array

  let rand = Math.floor(Math.random() * combQuotes.length) - 1;
  let randQuote = combQuotes[rand];

  const [loading, setLoading] = useState(true);
  const [quote, setQuote] = useState(randQuote);
  const [qArr, setQArr] = useState(combQuotes);

  const handleSearch = (value) => {
    // Return the ten closest matching results
    const filteredData = combQuotes
      .filter((item) =>
        (item.Author || item.Quote || item.Category || [...item.Tags])
          .toLowerCase()
          .includes(value.toLowerCase())
      )
      .slice(0, 10); // Keep only the first ten results
    setQArr(filteredData);
    if (filteredData.length) {
      setQuote(filteredData[0]); // Set the quote to the first result in the array
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
            data={qArr}
            renderItem={({ item }) => <QuoteCard data={item} />}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <HomeHeader data={qArr} onSearch={handleSearch} />
            }
          />
        </View>
      </View>
      <View
        style={{
          backgroundColor: COLORS.primary,
          borderRadius: SIZES.extraLarge,
          minWidth: 200,
          padding: SIZES.small,
          marginHorizontal: 100,
          marginBottom: SIZES.small,
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
              }}
            >
              Next Quote
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Main;
