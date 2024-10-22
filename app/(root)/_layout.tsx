import { Stack } from "expo-router";

export default function Root() {
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
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen
        name="flatlist"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
