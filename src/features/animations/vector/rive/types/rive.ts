import RiveRN from "rive-react-native";
import { XOR } from "rive-react-native/lib/typescript/helpers";

export type RiveRNProps = React.ComponentProps<typeof RiveRN>;

export type RiveProps = {
  testID?: string;
  style?: RiveRNProps["style"];
  autoplay?: RiveRNProps["autoplay"];
} & XOR<
  {
    resourceName: string;
  },
  {
    url: string;
  }
>;

export type RiveRef = {
  reset: () => void;
};
