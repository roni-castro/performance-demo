// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier", "react-native"],
  rules: {
    "prettier/prettier": "error",
    "react-native/no-unused-styles": "error",
  },
  ignorePatterns: ["!src/**/*"],
  overrides: [
    {
      files: ["src/**/*.{js,jsx,ts,tsx,json}"],
    },
    {
      files: ["src/**/*.json"],
      rules: {
        "no-unused-expressions": "off",
      },
    },
  ],
};
