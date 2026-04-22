import { styles } from "@/app/styles";
import { Text, useWindowDimensions, View } from "react-native";
import * as Progress from "react-native-progress";
import KeyFactor from "../KeyFactor";
import Recommendation from "../Recommendation";

function ResultsTab({ dropoutRisk, keyFactors, predictionPercentage }) {
  const { width } = useWindowDimensions();

  return (
    <>
      <View
        style={{
          width: "100%",
          padding: 25,
          alignItems: "flex-start",
          justifyContent: "center",
          borderRadius: 24,
          backgroundColor:
            dropoutRisk === "HIGH"
              ? styles.riskPercentageContainerBackgroundColor.high
              : styles.riskPercentageContainerBackgroundColor.low,
        }}
      >
        <View
          style={{
            borderRadius: 100,
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 13,
            paddingRight: 13,
            backgroundColor: dropoutRisk === "HIGH" ? "#760e0e" : "#0b4805",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
            marginBottom: 5,
          }}
        >
          <View
            style={{
              borderRadius: 100,
              width: 8,
              height: 8,
              backgroundColor: dropoutRisk === "HIGH" ? "#c60000" : "#338d2b",
            }}
          ></View>

          <Text
            style={{
              color: "#ec7c7cd2",
              fontWeight: 600,
            }}
          >
            {dropoutRisk}
          </Text>
        </View>

        <Text
          style={{
            color: dropoutRisk === "HIGH" ? "#efb7b7d2" : "#78c471cf",
            fontWeight: 600,
            fontSize: 50,
          }}
        >
          {predictionPercentage}%
        </Text>

        <Text
          style={{
            marginBottom: 10,
            color: "#ec7c7cd2",
            fontWeight: 400,
          }}
        >
          Probability of dropout
        </Text>

        <Progress.Bar
          progress={predictionPercentage / 100}
          width={width - 83}
          color={dropoutRisk === "HIGH" ? "#af1515" : "#23a117"}
          unfilledColor="#a6a6a6"
          borderWidth={0}
        />
      </View>

      <>
        <Text
          style={{
            color: "#ffffff82",
            fontWeight: 500,
            marginTop: 13,
            marginLeft: 5,
          }}
        >
          KEY FACTORS
        </Text>

        <View
          style={{
            overflow: "hidden",
            borderRadius: 24,
            marginTop: 5,
          }}
        >
          {keyFactors.map((kf, index) => (
            <KeyFactor key={index} label={kf} />
          ))}
        </View>
      </>

      <>
        <Text
          style={{
            color: "#ffffff82",
            fontWeight: 500,
            marginTop: 13,
            marginLeft: 5,
          }}
        >
          RECOMMENDATIONS
        </Text>

        <View
          style={{
            overflow: "hidden",
            borderRadius: 24,
            marginTop: 5,
          }}
        >
          <Recommendation
            label={"Academic Counseling"}
            subLabel={"Schedule urgent intervention session"}
          />

          <Recommendation
            label={"Attendance Monitoring"}
            subLabel={"Daily check-in program enrollement"}
          />
        </View>
      </>
    </>
  );
}

export default ResultsTab;
