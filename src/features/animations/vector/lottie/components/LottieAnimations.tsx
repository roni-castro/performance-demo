import {
  LottieAnimationTypes,
  TLottieAnimation,
} from "@/features/animations/vector/lottie/types/lottieAnimation";
import Lottie from "./LottieAnimation";

const AnimationsMap = {
  [LottieAnimationTypes.VECTOR_LOTTIE_LOCAL]: () => (
    <Lottie
      testID="local"
      source={require("@/assets/animations/lottie/watermelon.json")}
    />
  ),
  [LottieAnimationTypes.VECTOR_LOTTIE_REMOTE]: () => (
    <Lottie
      testID="remote"
      source={{
        uri: "https://raw.githubusercontent.com/roni-castro/performance-demo/main/assets/animations/lottie/watermelon.json",
      }}
    />
  ),
} as const;

type LottieAnimationsProps = {
  type: TLottieAnimation;
};

export default function LottieAnimations({ type }: LottieAnimationsProps) {
  const AnimationComponent = AnimationsMap[type];
  return <AnimationComponent />;
}
