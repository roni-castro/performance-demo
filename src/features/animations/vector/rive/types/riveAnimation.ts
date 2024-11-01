import { Values } from "@/types/values";

export const RiveAnimationTypes = {
  VECTOR_RIVE_LOCAL: "vector-rive-local",
  VECTOR_RIVE_REMOTE: "vector-rive-remote",
} as const;

export type TRiveAnimation = Values<typeof RiveAnimationTypes>;
