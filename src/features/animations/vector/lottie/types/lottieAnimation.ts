import { Values } from "@/types/values";

export const LottieAnimationTypes = {
  VECTOR_LOTTIE_LOCAL: "vector-lottie-local",
  VECTOR_LOTTIE_REMOTE: "vector-lottie-remote",
} as const;

export type TLottieAnimation = Values<typeof LottieAnimationTypes>;
