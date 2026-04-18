import SliderQuestion from "@/components/SliderQuestion";
import { useState } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";

export default function Index() {
  const [activeTab, setActiveTab] = useState<string>("assessment_tab");
  const [studyTime, setStudyTime] = useState(0);
  const [failures, setFailures] = useState(0);
  const [absences, setAbsences] = useState(0);
  const [gwa, setGwa] = useState(1.0);

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

        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            marginBottom: 10,
            width: "100%",
          }}
        >
          <Pressable
            onPress={() => setActiveTab("assessment_tab")}
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? "#474745"
                  : activeTab === "assessment_tab"
                  ? "#262624"
                  : "#30302E",
                borderRadius: 16,
                padding: 12,
                width: "50%",
                alignItems: "center",
              },
            ]}
          >
            <Text
              style={{
                color: "#fff",
              }}
            >
              Assess
            </Text>
          </Pressable>

          <Pressable
            onPress={() => setActiveTab("result_tab")}
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? "#474745"
                  : activeTab === "result_tab"
                  ? "#262624"
                  : "#30302E",
                borderRadius: 16,
                padding: 12,
                width: "50%",
                alignItems: "center",
              },
            ]}
          >
            <Text
              style={{
                color: "#fff",
              }}
            >
              Results
            </Text>
          </Pressable>
        </View>

        <View>
          {activeTab === "assessment_tab" && (
            <>
              <Text
                style={{
                  color: "#ffffff82",
                  fontWeight: 500,
                }}
              >
                ACADEMIC
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "#262624",
                  borderRadius: 16,
                  width: "100%",
                  marginTop: 10,
                  padding: 16,
                }}
              >
                <SliderQuestion
                  label="Study Time"
                  value={studyTime}
                  setValue={setStudyTime}
                  min={0}
                  max={30}
                />

                <SliderQuestion
                  label="Past Failures"
                  value={failures}
                  setValue={setFailures}
                  min={0}
                  max={9}
                />

                <SliderQuestion
                  label="Absences"
                  value={absences}
                  setValue={setAbsences}
                  min={0}
                  max={16}
                />

                <SliderQuestion
                  label="GWA"
                  value={gwa}
                  setValue={setGwa}
                  min={1}
                  max={5}
                />
              </View>
            </>
          )}

          {activeTab === "result_tab" && <Text> </Text>}
        </View>
      </View>
    </SafeAreaView>
  );
}
