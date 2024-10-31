import LottieAnimations from "@/features/animations/vector/lottie/components/LottieAnimations";
import { TAnimation } from "@/features/animations/types/animation";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useLayoutEffect } from "react";

export default function Animations() {
  const params = useLocalSearchParams<{ id: TAnimation }>();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ title: params.id });
  }, [navigation, params.id]);

  return <LottieAnimations type={params.id} />;
}
