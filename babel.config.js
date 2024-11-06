module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        "babel-preset-expo",
        {
          "react-compiler": {
            sources: (filename) => {
              // Match file names to include in the React Compiler.
              return ["src/components", "src/features", "src/hooks"].some(
                (dir) => filename.includes(dir),
              );
            },
          },
        },
      ],
    ],
  };
};
