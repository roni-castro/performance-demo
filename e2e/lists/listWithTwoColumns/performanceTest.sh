REPORTS_PATH="reports/lists/listWithTwoColumns"
mkdir -p $REPORTS_PATH

# 1. A grid with two columns using the **Flat**List component.
flashlight test --bundleId com.ronicesarrc.performance.demo \
  --testCommand "maestro test e2e/lists/listWithTwoColumns/flatListGrid.yaml" \
  --iterationCount 1 \
  --resultsFilePath $REPORTS_PATH/flatlist.json \
  --resultsTitle "FlatList"

# 2. A grid with two columns using the **Flash**List component.
flashlight test --bundleId com.ronicesarrc.performance.demo \
  --testCommand "maestro test e2e/lists/listWithTwoColumns/flashListGrid.yaml" \
  --iterationCount 1 \
  --resultsFilePath $REPORTS_PATH/flashlist.json \
  --resultsTitle "Flashlist"

# 3. A custom grid with two columns using flexbox for layout.
flashlight test --bundleId com.ronicesarrc.performance.demo \
  --testCommand "maestro test e2e/lists/listWithTwoColumns/customGrid.yaml" \
  --iterationCount 1 \
  --resultsFilePath $REPORTS_PATH/custom-grid.json \
  --resultsTitle "Custom Grid"

# Run this command to see the reports generated and compare them.
flashlight report $REPORTS_PATH --output-dir $REPORTS_PATH