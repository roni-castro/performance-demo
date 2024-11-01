import { useRive } from "@rive-app/react-canvas";
import {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from "react";
import { View } from "react-native";
import { RiveProps, RiveRef } from "../types/rive";

const Rive: ForwardRefRenderFunction<RiveRef, RiveProps> = (
  { testID, resourceName, url, style, ...props },
  ref,
) => {
  const { RiveComponent, rive } = useRive({
    src: resourceName || url,
    ...props,
  });

  useImperativeHandle(ref, () => ({
    reset: () => {
      rive?.reset();
      rive?.play();
    },
  }));

  return (
    <View style={style}>
      <RiveComponent data-testid={testID} />
    </View>
  );
};

export default forwardRef(Rive);
