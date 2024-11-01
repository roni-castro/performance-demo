import LottieAnimations from "@/features/animations/vector/lottie/components/LottieAnimations";
import { TLottieAnimation } from "@/features/animations/vector/lottie/types/lottieAnimation";
import useNavigationTitleUpdate from "@/hooks/useNavigationTitleUpdate";
import { useLocalSearchParams } from "expo-router";

export default function LottieAnimationsScreen() {
  const params = useLocalSearchParams<{ id: TLottieAnimation }>();
  useNavigationTitleUpdate(params.id);

  return <LottieAnimations type={params.id} />;
}
