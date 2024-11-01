import { forwardRef, ForwardRefRenderFunction } from "react";
import RiveRN, { RiveRef } from "rive-react-native";
import { RiveProps } from "../types/rive";

const Rive: ForwardRefRenderFunction<RiveRef, RiveProps> = (props, ref) => {
  return <RiveRN ref={ref} {...props} />;
};

export default forwardRef(Rive);
