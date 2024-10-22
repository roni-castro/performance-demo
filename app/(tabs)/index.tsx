import Button from "@/components/Button";
import Section from '@/components/Section';
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Home() {
  return (
    <Section title="FlatLists" style={styles.container}>
      <Button
        title="Show nested flatList grid (non performative)"
        onPress={() => router.navigate("/flatlist/nested-grid")}
        fullWidth
      />
      <Button
        title="Show flatList with custom grid (performative)"
        onPress={() => router.navigate("/flatlist/custom-grid")}
        fullWidth
      />
    </Section>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    gap: 8
  },
});
