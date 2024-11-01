import { useRef } from "react";
import { Button, StyleSheet, View } from "react-native";
import { RiveProps, RiveRef } from "../types/rive";
import Rive from "./Rive";
import { createTestID } from "@/utils/testId";

export type RiveAnimationProps = RiveProps;

export default function RiveAnimation({
  testID,
  ...restProps
}: RiveAnimationProps) {
  const animation = useRef<RiveRef>(null);

  return (
    <View
      style={styles.animationContainer}
      testID={createTestID("riveContainer", testID)}
    >
      <Rive
        autoplay
        //@ts-ignore
        ref={animation}
        style={styles.animation}
        testID={createTestID("riveView", testID)}
        {...restProps}
      />
      <Button
        testID={createTestID("riveButton", testID)}
        title="Restart Animation"
        onPress={() => {
          animation.current?.reset();
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
    flexGrow: 0,
    width: "100%",
    height: 300,
    maxWidth: 500,
    backgroundColor: "#eee",
    marginBottom: 20,
  },
});
