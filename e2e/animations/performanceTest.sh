REPORTS_PATH="reports/animations"
mkdir -p $REPORTS_PATH

# Check performance of lottie local animations.
flashlight test --bundleId com.ronicesarrc.performance.demo \
  --testCommand "maestro test e2e/animations/vector/lottieLocal.yaml" \
  --iterationCount 1 \
  --resultsFilePath $REPORTS_PATH/lottieLocal.json \
  --resultsTitle "LottieLocal"

# Check performance of lottie remote animations.
flashlight test --bundleId com.ronicesarrc.performance.demo \
  --testCommand "maestro test e2e/animations/vector/lottieRemote.yaml" \
  --iterationCount 1 \
  --resultsFilePath $REPORTS_PATH/lottieRemote.json \
  --resultsTitle "LottieRemote"

flashlight report $REPORTS_PATH --output-dir $REPORTS_PATH