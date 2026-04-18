import Slider from "@react-native-community/slider";
import React from "react";
import { Text, View } from "react-native";

function SliderQuestion({ label, value, setValue, min, max }) {
  return (
    <>
      <View
        style={{
          width: "50%",
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
          width: "50%",
          alignItems: "center",
        }}
      >
        <Slider
          style={{ width: "80%" }}
          minimumValue={min}
          maximumValue={max}
          value={value}
          onValueChange={setValue}
          minimumTrackTintColor="#4f46e5"
          maximumTrackTintColor="#ccc"
          thumbTintColor="#4f46e5"
        />
        <Text
          style={{
            color: "#fff",
            fontSize: 18,
            marginLeft: 12,
          }}
        >
          {value.toFixed(0)}
        </Text>
      </View>
    </>
  );
}

export default SliderQuestion;
