import { useNavigation } from "expo-router";
import { useLayoutEffect } from "react";

const useNavigationTitleUpdate = (title: string) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ title });
  }, [navigation, title]);
};

export default useNavigationTitleUpdate;
