REPORTS_PATH="reports/lists/longList"
mkdir -p $REPORTS_PATH

# 1. A long list using FlatList component.
flashlight test --bundleId com.ronicesarrc.performance.demo \
  --testCommand "maestro test e2e/lists/longList/longListFlatList.yaml" \
  --iterationCount 1 \
  --resultsFilePath $REPORTS_PATH/longListFlatList.json \
  --resultsTitle "Long List Using FlatList"

# 2. A long list using FlashList component.
flashlight test --bundleId com.ronicesarrc.performance.demo \
  --testCommand "maestro test e2e/lists/longList/longListFlashList.yaml" \
  --iterationCount 1 \
  --resultsFilePath $REPORTS_PATH/longListFlashList.json \
  --resultsTitle "Long List Using FlashList"

# 3. A long list using ScrollView.
flashlight test --bundleId com.ronicesarrc.performance.demo \
  --testCommand "maestro test e2e/lists/longList/longListScrollView.yaml" \
  --iterationCount 1 \
  --resultsFilePath $REPORTS_PATH/longListScrollView.json \
  --resultsTitle "Long List Using ScrollView"

# Run this command to see the reports generated and compare them.
flashlight report $REPORTS_PATH --output-dir $REPORTS_PATH