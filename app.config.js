const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';

const getAppName = () => {
  if (IS_DEV) {
    return 'Demo (Dev)';
  }
  if (IS_PREVIEW) {
    return 'Demo (Preview)';
  }

  return 'Demo: Emoji Stickers';
};

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return 'com.ronicesarrc.demo.dev';
  }

  if (IS_PREVIEW) {
    return 'com.ronicesarrc.demo.preview';
  }

  return 'com.ronicesarrc.demo';
};

export default {
  "expo": {
    "name": getAppName(),
    "slug": "demo",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "myapp",
    "userInterfaceStyle": "automatic",
    "splash": {
      "image": "./assets/images/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#25292e"
    },
    "ios": {
      "buildNumber": "1",
      "supportsTablet": true,
      "bundleIdentifier": getUniqueIdentifier(),
    },
    "android": {
      "versionCode": 1,
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/adaptive-icon.png",
        "backgroundColor": "#25292e"
      },
      "package": getUniqueIdentifier(),
      "permissions": [
        "android.permission.READ_EXTERNAL_STORAGE",
        "android.permission.WRITE_EXTERNAL_STORAGE",
        "android.permission.ACCESS_MEDIA_LOCATION"
      ]
    },
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./assets/images/favicon.png"
    },
    "plugins": [
      "expo-router",
      [
        "expo-media-library",
        {
          "photosPermission": "Allow $(PRODUCT_NAME) to access your photos.",
          "savePhotosPermission": "Allow $(PRODUCT_NAME) to save photos.",
          "isAccessMediaLocationEnabled": true
        }
      ]
    ],
    "experiments": {
      "typedRoutes": true
    },
    "extra": {
      "eas": {
        "projectId": "f0d8ca3f-a83c-4f44-8178-0ed56625ffe7"
      }
    },
    "owner": "ronicesarrc"
  }
};
