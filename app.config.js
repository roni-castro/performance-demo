const IS_DEV = process.env.APP_VARIANT === "development";
const IS_PREVIEW = process.env.APP_VARIANT === "preview";

const getAppName = () => {
  if (IS_DEV) {
    return "Performance Demo (Dev)";
  }
  if (IS_PREVIEW) {
    return " Performance Demo (Preview)";
  }

  return "Performance Demo";
};

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return "com.ronicesarrc.performance.demo.dev";
  }

  if (IS_PREVIEW) {
    return "com.ronicesarrc.performance.demo.preview";
  }

  return "com.ronicesarrc.performance.demo";
};

export default {
  expo: {
    name: getAppName(),
    slug: "performance-demo",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    ios: {
      buildNumber: "1",
      supportsTablet: true,
      bundleIdentifier: getUniqueIdentifier(),
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#25292e",
      },
      package: getUniqueIdentifier(),
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      [
        "expo-splash-screen",
        {
          backgroundColor: "#25292e",
          image: "./assets/images/icon.png",
          imageWidth: 156,
        },
      ],
      "expo-router",
      [
        "expo-build-properties",
        {
          ios: {
            deploymentTarget: "15.1",
          },
        },
      ],
      [
        "expo-custom-assets",
        {
          // Add asset directory paths, the plugin copies the files in the given paths to the app bundle folder named Assets
          assetsPaths: ["./assets/animations/rive"],
        },
      ],
      [
        "@sentry/react-native/expo",
        {
          url: "https://sentry.io/",
          project: "react-native",
          organization: "roni-j0",
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
      reactCompiler: true,
    },
    extra: {
      eas: {
        projectId: "7378a355-7de3-4fbe-b404-b7511e10d0c3",
      },
    },
    owner: "ronicesarrc",
    updates: {
      url: "https://u.expo.dev/7378a355-7de3-4fbe-b404-b7511e10d0c3",
    },
    runtimeVersion: {
      policy: "appVersion",
    },
  },
};
