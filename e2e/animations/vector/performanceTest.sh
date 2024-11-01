REPORTS_PATH="reports/animations/vector"
VECTOR_FOLDER_PATH="e2e/animations/vector"
mkdir -p $REPORTS_PATH

# Check performance of lottie local animations.
flashlight test --bundleId com.ronicesarrc.performance.demo \
  --testCommand "maestro test $VECTOR_FOLDER_PATH/lottie/lottieLocal.yaml" \
  --iterationCount 2 \
  --resultsFilePath $REPORTS_PATH/lottieLocal.json \
  --resultsTitle "LottieLocal"

# Check performance of lottie remote animations.
flashlight test --bundleId com.ronicesarrc.performance.demo \
  --testCommand "maestro test $VECTOR_FOLDER_PATH/lottie/lottieRemote.yaml" \
  --iterationCount 2 \
  --resultsFilePath $REPORTS_PATH/lottieRemote.json \
  --resultsTitle "LottieRemote"

# Check performance of rive local animations.
flashlight test --bundleId com.ronicesarrc.performance.demo \
  --testCommand "maestro test $VECTOR_FOLDER_PATH/rive/riveLocal.yaml" \
  --iterationCount 2 \
  --resultsFilePath $REPORTS_PATH/riveLocal.json \
  --resultsTitle "RiveLocal"

# Check performance of rive remote animations.
flashlight test --bundleId com.ronicesarrc.performance.demo \
  --testCommand "maestro test $VECTOR_FOLDER_PATH/rive/riveRemote.yaml" \
  --iterationCount 2 \
  --resultsFilePath $REPORTS_PATH/riveRemote.json \
  --resultsTitle "RiveRemote"

flashlight report $REPORTS_PATH --output-dir $REPORTS_PATH