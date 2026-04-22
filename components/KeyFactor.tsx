import React from "react";
import { Text, View } from "react-native";

function KeyFactor({ label }) {
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
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#262624",
          padding: 16,
          width: "100%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          }}
        >
          <View
            style={{
              borderRadius: 100,
              width: 8,
              height: 8,
              backgroundColor: "#c60000",
            }}
          ></View>
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
            }}
          >
            {label}
          </Text>
        </View>

        <View
          style={{
            borderRadius: 100,
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 13,
            paddingRight: 13,
            backgroundColor: "#760e0e",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
            marginBottom: 5,
          }}
        >
          <Text
            style={{
              color: "#ec7c7cd2",
              fontWeight: 600,
            }}
          >
            High
          </Text>
        </View>
      </View>
    </View>
  );
}

export default KeyFactor;
