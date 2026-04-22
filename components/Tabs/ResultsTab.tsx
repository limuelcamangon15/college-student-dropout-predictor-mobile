import { styles } from "@/app/styles";
import { Text, useWindowDimensions, View } from "react-native";
import * as Progress from "react-native-progress";
import KeyFactor from "../KeyFactor";
import Recommendation from "../Recommendation";

function ResultsTab() {
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
          backgroundColor: styles.riskPercentageContainerBackgroundColor.high,
        }}
      >
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
              color: "#ec7c7cd2",
              fontWeight: 600,
            }}
          >
            HIGH RISK
          </Text>
        </View>

        <Text
          style={{
            color: "#efb7b7d2",
            fontWeight: 600,
            fontSize: 50,
          }}
        >
          78%
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
          progress={0.7}
          width={width - 83}
          color="#af1515"
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
          <KeyFactor label={"Low GWA"} />

          <KeyFactor label={"High absences"} />

          <KeyFactor label={"Multiple failures"} />
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
