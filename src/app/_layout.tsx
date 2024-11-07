import Constants, { ExecutionEnvironment } from "expo-constants";
import { Stack, useNavigationContainerRef } from "expo-router";
import { setStatusBarStyle } from "expo-status-bar";
import { useEffect } from "react";

import * as Sentry from "@sentry/react-native";

const IS_NATIVE_BUILD =
  Constants.executionEnvironment === ExecutionEnvironment.StoreClient; // Only in native builds, not in Expo Go.

const navigationIntegration = Sentry.reactNavigationIntegration({
  enableTimeToInitialDisplay: IS_NATIVE_BUILD,
});

Sentry.init({
  enabled: !__DEV__,
  dsn: "https://1b27b8c56af5b5a47387fe0ecc726353@o4508241637146624.ingest.us.sentry.io/4508241637343232",
  tracesSampleRate: 1.0,
  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // enableSpotlight: __DEV__,
  _experiments: {
    replaysSessionSampleRate: 1.0,
    replaysOnErrorSampleRate: 1.0,
  },
  integrations: [
    navigationIntegration,
    Sentry.httpClientIntegration(),
    Sentry.mobileReplayIntegration(),
  ],
  enableNativeFramesTracking: IS_NATIVE_BUILD,
});

function RootLayout() {
  const ref = useNavigationContainerRef();

  useEffect(() => {
    if (ref) {
      navigationIntegration.registerNavigationContainer(ref);
    }
  }, [ref]);

  useEffect(() => {
    setStatusBarStyle("light");
  }, []);

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
    </Stack>
  );
}

export default Sentry.wrap(RootLayout);
