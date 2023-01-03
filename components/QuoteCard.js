import { View, Image, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, SHADOWS, FONTS } from "../constants/theme";


const QuoteCard = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.large,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          padding: 10,
          marginVertical: 30,
          alignItems: "center",
        }}
      >
        <Text style={{ position: "absolute", top: -10}}>
          {data.Author}
        </Text>
        <Text style={{ position: "absolute", bottom: -12}}>
          {data.Category}
        </Text>
        <Text style={{ fontSize: SIZES.extraLarge, marginTop: 10 }}>{data.Quote}</Text>
      </View>
    </View>
  );
};

export default QuoteCard;
