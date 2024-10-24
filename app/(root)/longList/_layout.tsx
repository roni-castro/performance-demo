import { Stack } from "expo-router";

export default function LongListLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#25292e",
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="[id]" />
    </Stack>
  );
}
