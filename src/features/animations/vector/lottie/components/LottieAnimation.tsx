import { createTestID } from "@/utils/testId";
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
        style={styles.animation}
        source={source}
        testID={createTestID("lottieView", testID)}
      />
      <Button
        testID={createTestID("lottieButton", testID)}
        title="Restart Animation"
        onPress={() => {
          animation.current?.reset();
          animation.current?.play();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 20,
  },
  animation: {
    width: "100%",
    height: 300,
    maxWidth: 500,
    backgroundColor: "#eee",
    marginBottom: 20,
  },
});
