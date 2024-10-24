import Section from "@/components/Section";
import { GridTypes } from "@/features/shared/types/grid";
import { LongListTypes } from "@/features/shared/types/longList";
import { router } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";

export default function FlatLists() {
  return (
    <ScrollView>
      <Section title="List with two columns" style={styles.container}>
        <Section.Button
          title="Show flatList grid (non performative)"
          onPress={() =>
            router.navigate(`/listTwoColumns/${GridTypes.FLATLIST_GRID}`)
          }
          testID="flatlist-grid-button"
        />
        <Section.Button
          title="Show flashList grid (performative)"
          onPress={() =>
            router.navigate(`/listTwoColumns/${GridTypes.FLASHLIST_GRID}`)
          }
          testID="flashlist-grid-button"
        />
        <Section.Button
          title="Show flatList with custom grid (performative)"
          onPress={() =>
            router.navigate(`/listTwoColumns/${GridTypes.CUSTOM_GRID}`)
          }
          testID="custom-grid-button"
        />
      </Section>
      <Section title="Long list" style={styles.container}>
        <Section.Button
          title="Show long list using ScrollView"
          onPress={() =>
            router.navigate(`/longList/${LongListTypes.SCROLLVIEW}`)
          }
        />
        <Section.Button
          title="Show long list using FlatList"
          onPress={() => router.navigate(`/longList/${LongListTypes.FLATLIST}`)}
        />
        <Section.Button
          title="Show long list using FlashList"
          onPress={() =>
            router.navigate(`/longList/${LongListTypes.FLASHLIST}`)
          }
        />
      </Section>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    gap: 8,
  },
});
