import Button from "@/components/Button";
import Section from "@/components/Section";
import { GridTypes } from "@/features/shared/types/grid";
import { router } from "expo-router";
import { StyleSheet } from "react-native";

export default function FlatLists() {
  return (
    <>
      <Section title="List with two columns" style={styles.container}>
        <Button
          title="Show flatList grid (non performative)"
          onPress={() =>
            router.navigate(`/listTwoColumns/${GridTypes.FLATLIST_GRID}`)
          }
          testID="flatlist-grid-button"
          fullWidth
        />
        <Button
          title="Show flashList grid (performative)"
          onPress={() =>
            router.navigate(`/listTwoColumns/${GridTypes.FLASHLIST_GRID}`)
          }
          testID="flashlist-grid-button"
          fullWidth
        />
        <Button
          title="Show flatList with custom grid (performative)"
          onPress={() =>
            router.navigate(`/listTwoColumns/${GridTypes.CUSTOM_GRID}`)
          }
          testID="custom-grid-button"
          fullWidth
        />
      </Section>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    gap: 8,
  },
});
