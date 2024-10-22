import CartProductsGrid from '@/features/flatList/CartProductsGrid';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';

export default function FlatListWithGrid() {
  const params = useLocalSearchParams<{ id: 'custom-grid' | 'nested-grid' }>()
  const navigation = useNavigation();
  
  useEffect(() => {
    navigation.setOptions({ title: `FlatList with ${params.id}` });
  }, [navigation, params.id]);

  return (
    <CartProductsGrid shouldUseNestedFlatList={params.id === 'nested-grid'} />
  );
}