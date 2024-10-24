import Button from "@/components/Button";
import Section from "@/components/Section";
import { GridTypes } from "@/features/flatListGrid/shared/types";
import { router } from "expo-router";
import { StyleSheet } from "react-native";

export default function FlatLists() {
  return (
    <Section title="FlatLists" style={styles.container}>
      <Button
        title="Show flatList grid (non performative)"
        onPress={() => router.navigate(`/flatlist/${GridTypes.FLATLIST_GRID}`)}
        testID="flatlist-grid-button"
        fullWidth
      />
      <Button
        title="Show flashList grid (performative)"
        onPress={() => router.navigate(`/flatlist/${GridTypes.FLASHLIST_GRID}`)}
        testID="flashlist-grid-button"
        fullWidth
      />
      <Button
        title="Show flatList with custom grid (performative)"
        onPress={() => router.navigate(`/flatlist/${GridTypes.CUSTOM_GRID}`)}
        testID="custom-grid-button"
        fullWidth
      />
    </Section>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    gap: 8,
  },
});
