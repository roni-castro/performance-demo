import {
  RiveAnimationTypes,
  TRiveAnimation,
} from "@/features/animations/vector/rive/types/riveAnimation";
import RiveAnimation from "./RiveAnimation";

const AnimationsMap = {
  [RiveAnimationTypes.VECTOR_RIVE_LOCAL]: () => (
    <RiveAnimation testID="local" resourceName="watermelon" />
  ),
  [RiveAnimationTypes.VECTOR_RIVE_REMOTE]: () => (
    <RiveAnimation
      testID="remote"
      url="https://raw.githubusercontent.com/roni-castro/performance-demo/main/assets/animations/rive/watermelon.riv"
    />
  ),
} as const;

type RiveAnimationsProps = {
  type: TRiveAnimation;
};

export default function RiveAnimations({ type }: RiveAnimationsProps) {
  const AnimationComponent = AnimationsMap[type];
  return <AnimationComponent />;
}
