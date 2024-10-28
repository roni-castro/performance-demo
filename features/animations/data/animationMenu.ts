import { AnimationTypes } from "@/features/animations/types/animation";
import { TMenu } from "@/features/shared/types/menu";

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
