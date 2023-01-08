import { View, Text, Image, TextInput } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import search from "../assets/icons/search.png";

const HomeHeader = ({ data, onSearch }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ width: 45, height: 45 }}></View>
      </View>
      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white,
          }}
        >
          {data.Category}
        </Text>

        {[data.Tags].map((tag, index) => (
          <View
            key={index}
            style={{
              flex: 1,
              alignItems: "center",
              borderRadius: SIZES.font,
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.bold,
                fontSize: SIZES.large,
                color: COLORS.white,
                marginTop: SIZES.base / 2,
              }}
            >
              {tag ? tag.join(" ") : ""}
            </Text>
          </View>
        ))}
      </View>
      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}
        >
          <Image
            source={search}
            style={{
              left: 0,
              zIndex: 3,
              height: SIZES.large + 5,
              width: SIZES.large + 5,
              padding: SIZES.font,
              marginRight: "25%",
            }}
          />
          <TextInput
            placeholder="Search Quotes"
            style={{ flex: 1, color: COLORS.white, fontSize: SIZES.large }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
