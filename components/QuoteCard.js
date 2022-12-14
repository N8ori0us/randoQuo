import { View, Image, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, SHADOWS, assets } from "../constants/index";
import { CircleButton, RectButton } from "./Button";


const QuoteCard = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          padding: 10,
          marginTop: 30,
          alignItems: "center",
        }}
      >
        <Text style={{ position: "absolute", top: 0, left: 10 }}>
          {data.Author}
        </Text>
        <Text style={{ position: "absolute", bottom: -8, right: 10 }}>
          {data.Category}
        </Text>
        <Text style={{ marginTop: 10 }}>{data.Quote}</Text>
      </View>
    </View>
  );
};

export default QuoteCard;
