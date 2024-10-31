import {
  AnimationTypes,
  TAnimation,
} from "@/features/animations/types/animation";
import Lottie from "./LottieAnimation";

const AnimationsMap = {
  [AnimationTypes.VECTOR_LOTTIE_LOCAL]: () => (
    <Lottie
      testID="local"
      source={require("@/assets/animations/watermelon.json")}
    />
  ),
  [AnimationTypes.VECTOR_LOTTIE_REMOTE]: () => (
    <Lottie
      testID="remote"
      source={{
        uri: "https://raw.githubusercontent.com/lottie-react-native/lottie-react-native/master/example/animations/Watermelon.json",
      }}
    />
  ),
} as const;

type LottieAnimationsProps = {
  type: TAnimation;
};

export default function LottieAnimations({ type }: LottieAnimationsProps) {
  const AnimationComponent = AnimationsMap[type];
  return <AnimationComponent />;
}
