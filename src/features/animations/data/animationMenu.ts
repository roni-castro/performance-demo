import { LottieAnimationTypes } from "@/features/animations/vector/lottie/types/lottieAnimation";
import { RiveAnimationTypes } from "@/features/animations/vector/rive/types/riveAnimation";
import { TMenu } from "@/components/Menu/types";

const animationMenu: TMenu = {
  id: "animations",
  title: "Animations",
  subMenus: [
    {
      title: "Vector",
      items: [
        {
          title: "Show lottie local animation",
          routePath: `/vector/lottie/${LottieAnimationTypes.VECTOR_LOTTIE_LOCAL}`,
        },
        {
          title: "Show lottie remote animation",
          routePath: `/vector/lottie/${LottieAnimationTypes.VECTOR_LOTTIE_REMOTE}`,
        },
        {
          title: "Show rive local animation",
          routePath: `/vector/rive/${RiveAnimationTypes.VECTOR_RIVE_LOCAL}`,
        },
        {
          title: "Show rive remote animation",
          routePath: `/vector/rive/${RiveAnimationTypes.VECTOR_RIVE_REMOTE}`,
        },
      ],
    },
  ],
};

export default animationMenu;
