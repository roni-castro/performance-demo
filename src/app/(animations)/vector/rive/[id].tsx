import RiveAnimations from "@/features/animations/vector/rive/components/RiveAnimations";
import { TRiveAnimation } from "@/features/animations/vector/rive/types/riveAnimation";
import useNavigationTitleUpdate from "@/hooks/useNavigationTitleUpdate";
import { useLocalSearchParams } from "expo-router";

export default function RiveAnimationsScreen() {
  const params = useLocalSearchParams<{ id: TRiveAnimation }>();
  useNavigationTitleUpdate(params.id);

  return <RiveAnimations type={params.id} />;
}
