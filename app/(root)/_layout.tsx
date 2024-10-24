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
        name="listTwoColumns"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="longList"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
