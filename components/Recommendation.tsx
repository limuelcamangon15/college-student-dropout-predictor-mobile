import React from "react";
import { Text, View } from "react-native";

function Recommendation({ label, subLabel }) {
  return (
    <View
      style={{
        flexDirection: "column",
        backgroundColor: "#30302E",
        gap: 4,
        overflow: "hidden",
        width: "100%",
        marginTop: 3,
      }}
    >
      <View
        style={{
          flexDirection: "column",
          backgroundColor: "#262624",
          padding: 16,
          width: "100%",
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
            color: "#ffffffa9",
            fontSize: 15,
          }}
        >
          {subLabel}
        </Text>
      </View>
    </View>
  );
}

export default Recommendation;
