# Welcome to the Performance demo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Performance tests

See explanations in [here](https://github.com/roni-castro/performance-demo/wiki/)

## Get Started

### 1. Install Dependencies
First, install the necessary packages:
```bash
npm install
```

### 2. Generate native folders (Android/iOS)
If you're making native changes or it's your first build, generate the android and ios folders:

```bash
npx expo prebuild
```

### 3. Install the App (For the first time or after native changes)
This command will generate a development build:
### For Android:
```bash
npm run android
```

### For iOS:
```bash
npm run ios
```

## (Optional) Run the App (No native changes & development build installed)
If you've already installed the app and there are no native changes, simply start the app and choose a option:

```bash
npx expo start
```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

