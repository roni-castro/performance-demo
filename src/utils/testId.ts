export const createTestID = (base: string, testID?: string): string => {
  return testID ? `${base}-${testID}` : base;
};
