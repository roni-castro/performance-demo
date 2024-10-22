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
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#25292e",
    },
    ios: {
      buildNumber: "1",
      supportsTablet: true,
      bundleIdentifier: getUniqueIdentifier(),
      infoPlist: {
        NSPhotoLibraryUsageDescription:
          "Allow $(PRODUCT_NAME) to access your photos.",
      },
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#25292e",
      },
      package: getUniqueIdentifier(),
      permissions: [
        "android.permission.READ_EXTERNAL_STORAGE",
        "android.permission.WRITE_EXTERNAL_STORAGE",
        "android.permission.ACCESS_MEDIA_LOCATION",
      ],
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      "expo-router",
      [
        "expo-media-library",
        {
          photosPermission: "Allow $(PRODUCT_NAME) to access your photos.",
          savePhotosPermission: "Allow $(PRODUCT_NAME) to save photos.",
          isAccessMediaLocationEnabled: true,
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
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
