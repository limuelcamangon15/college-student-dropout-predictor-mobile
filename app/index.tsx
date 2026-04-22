import SliderQuestion from "@/components/SliderQuestion";
import SwitchQuestion from "@/components/SwitchQuestion";
import ResultsTab from "@/components/Tabs/ResultsTab";
import { useEffect, useState } from "react";
import { Platform, Pressable, SafeAreaView, Text, View } from "react-native";

export default function Index() {
  const [activeTab, setActiveTab] = useState<string>("assessment_tab");
  const [studyTime, setStudyTime] = useState(0);
  const [failures, setFailures] = useState(0);
  const [absences, setAbsences] = useState(0);
  const [gwa, setGwa] = useState(1.0);
  const [familyIncome, setFamilyIncome] = useState(1000);
  const [isWorkingStudent, setIsWorkingStudent] = useState(false);

  useEffect(() => {
    console.log(isWorkingStudent);
  }, [isWorkingStudent]);

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
            marginTop: Platform.OS === "android" ? "7%" : 0,
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
                    flexDirection: "column",
                    backgroundColor: "#30302E",
                    gap: 4,
                    borderRadius: 16,
                    overflow: "hidden",
                    width: "100%",
                    marginTop: 10,
                  }}
                >
                  <SliderQuestion
                    label="Study Time"
                    subLabel={"Hours per week"}
                    value={studyTime}
                    setValue={setStudyTime}
                    min={0}
                    max={30}
                    isForStudyTime={true}
                  />

                  <SliderQuestion
                    label="Past Failures"
                    subLabel={"Course failures"}
                    value={failures}
                    setValue={setFailures}
                    min={0}
                    max={9}
                  />

                  <SliderQuestion
                    label="Absences"
                    subLabel={"Days missed"}
                    value={absences}
                    setValue={setAbsences}
                    min={0}
                    max={16}
                  />

                  <SliderQuestion
                    label="GWA"
                    subLabel={"Current grade average"}
                    value={gwa}
                    setValue={setGwa}
                    min={1}
                    max={5}
                    isForGwa={true}
                  />
                </View>
              </>

              <>
                <Text
                  style={{
                    color: "#ffffff82",
                    fontWeight: 500,
                    marginTop: 12,
                  }}
                >
                  PERSONAL
                </Text>

                <View
                  style={{
                    flexDirection: "column",
                    backgroundColor: "#30302E",
                    gap: 4,
                    borderRadius: 16,
                    overflow: "hidden",
                    width: "100%",
                    marginTop: 10,
                  }}
                >
                  <SliderQuestion
                    label="Family Income"
                    subLabel={"Monthly (PHP)"}
                    value={familyIncome}
                    setValue={setFamilyIncome}
                    min={1000}
                    max={50000}
                    isForIncome={true}
                  />

                  <SwitchQuestion
                    label={"Working Student"}
                    subLabel={"Currently employed"}
                    value={isWorkingStudent}
                    setValue={setIsWorkingStudent}
                  />
                </View>
              </>

              <View
                style={{
                  backgroundColor: "#30302E",
                  marginTop: 20,
                }}
              >
                <Pressable
                  onPress={() => console.log("analyzing")}
                  style={({ pressed }) => ({
                    backgroundColor: pressed ? "#4D7C0F" : "#4e7d0b", // modern olive/green
                    paddingVertical: 14,
                    borderRadius: 14,
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",

                    // subtle depth
                    shadowColor: "#000",
                    shadowOpacity: pressed ? 0.15 : 0.25,
                    shadowRadius: 6,
                    shadowOffset: { width: 0, height: pressed ? 2 : 4 },
                    elevation: pressed ? 2 : 5,

                    // smooth press feel
                    transform: [{ scale: pressed ? 0.98 : 1 }],
                  })}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 16,
                      fontWeight: "500",
                      letterSpacing: 0.5,
                    }}
                  >
                    Analyze
                  </Text>
                </Pressable>
              </View>
            </>
          )}

          {activeTab === "result_tab" && <ResultsTab />}
        </View>
      </View>
    </SafeAreaView>
  );
}
