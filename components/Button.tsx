import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ButtonProps as RNButtonProps,
} from "react-native";

export interface ButtonProps extends RNButtonProps {
  title: string;
  onPress: () => void;
  fullWidth?: boolean;
}

export default function Button({
  title,
  onPress,
  fullWidth,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, fullWidth && styles.buttonFullWidth]}
      onPress={onPress}
      activeOpacity={0.8}
      {...props}
    >
      <Text style={styles.buttonLabel}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#25292e",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  buttonFullWidth: {
    width: "100%",
  },
  buttonLabel: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
