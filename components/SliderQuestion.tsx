import Slider from "@react-native-community/slider";
import React from "react";
import { Text, View } from "react-native";

function SliderQuestion({
  label,
  subLabel,
  value,
  setValue,
  min,
  max,
  isForStudyTime = false,
  isForIncome = false,
  isForGwa = false,
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#262624",
        padding: 16,
        width: "100%",
      }}
    >
      <View
        style={{
          width: isForIncome ? "40%" : "50%",
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
          }}
        >
          {label}
        </Text>
        <Text
          style={{
            color: "#ffffffc4",
          }}
        >
          {subLabel}
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          width: isForIncome ? "60%" : "50%",
          alignItems: "center",
        }}
      >
        <Slider
          style={{
            width: isForIncome ? "55%" : isForGwa ? "70%" : "80%",
            flex: 1,
          }}
          minimumValue={min}
          maximumValue={max}
          value={value}
          onValueChange={(val) => {
            const stepped = Math.round(val * 4) / 4;
            setValue(stepped);
          }}
          minimumTrackTintColor="#474745"
          maximumTrackTintColor="#ccc"
          thumbTintColor="#ffffff"
        />
        <Text
          style={{
            color: "#ffffffc7",
            fontSize: 18,
            marginLeft: 12,
            textAlign: "right",
          }}
        >
          {isForIncome && "₱"}
          {isForIncome
            ? value.toLocaleString("en-PH", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })
            : isForGwa
            ? value.toFixed(2)
            : value.toFixed(0)}
          {isForStudyTime && "h"}
        </Text>
      </View>
    </View>
  );
}

export default SliderQuestion;
