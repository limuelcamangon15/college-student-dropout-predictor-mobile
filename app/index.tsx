import { SafeAreaView, Text, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#30302E" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          padding: 16,
        }}
      >
        <Text
          style={{
            fontSize: 32,
            color: "#fff",
            fontWeight: 500,
          }}
        >
          College Student Risk
        </Text>

        <Text
          style={{
            color: "#ffffff82",
            fontWeight: 400,
          }}
        >
          Dropout prediction assessment
        </Text>
      </View>
    </SafeAreaView>
  );
}
