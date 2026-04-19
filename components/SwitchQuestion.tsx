import React from "react";
import { Switch, Text, View } from "react-native";

function SwitchQuestion({ label, subLabel, value, setValue }) {
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
          width: "80%",
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
          width: "20%",
          alignItems: "center",
        }}
      >
        <Switch value={value} onValueChange={() => setValue(!value)} />
      </View>
    </View>
  );
}

export default SwitchQuestion;
