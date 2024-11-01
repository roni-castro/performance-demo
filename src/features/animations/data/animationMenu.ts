import { AnimationTypes } from "@/features/animations/vector/lottie/types/lottieAnimation";
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
          routePath: `/vector/lottie/${AnimationTypes.VECTOR_LOTTIE_LOCAL}`,
        },
        {
          title: "Show lottie remote animation",
          routePath: `/vector/lottie/${AnimationTypes.VECTOR_LOTTIE_REMOTE}`,
        },
      ],
    },
  ],
};

export default animationMenu;
