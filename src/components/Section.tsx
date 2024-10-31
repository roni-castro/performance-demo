import React from "react";
import { Text, View, ViewProps, StyleSheet } from "react-native";
import Button, { ButtonProps } from "./Button";

type SectionProps = {
  title: string;
} & ViewProps;

const Section = ({ title, children, style }: SectionProps) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
};

const SectionButton = (props: ButtonProps) => {
  return <Button fullWidth {...props} />;
};

const styles = StyleSheet.create({
  container: {
    borderColor: "#25292e",
    borderWidth: 2,
    borderRadius: 8,
    padding: 8,
    gap: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

Section.Button = SectionButton;
export default Section;
