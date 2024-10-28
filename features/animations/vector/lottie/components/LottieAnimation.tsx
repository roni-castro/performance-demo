import LottieView, { LottieViewProps } from "lottie-react-native";
import { useRef } from "react";
import { Button, StyleSheet, View } from "react-native";

type LottieAnimationProps = {
  testID?: string;
  source: LottieViewProps["source"];
};

export default function LottieAnimation({
  testID,
  source,
}: LottieAnimationProps) {
  const animation = useRef<LottieView>(null);

  return (
    <View
      style={styles.animationContainer}
      testID={createTestID("lottieContainer", testID)}
    >
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#eee",
        }}
        source={source}
        testID={createTestID("lottieView", testID)}
      />
      <View style={styles.buttonContainer}>
        <Button
          testID={createTestID("lottieButton", testID)}
          title="Restart Animation"
          onPress={() => {
            animation.current?.reset();
            animation.current?.play();
          }}
        />
      </View>
    </View>
  );
}

export const createTestID = (base: string, testID?: string): string => {
  return testID ? `${base}-${testID}` : base;
};

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});
