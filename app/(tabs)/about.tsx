import CartProductsGrid from '@/features/complexFlatList/CartProductsGrid';
import useToggle from '@/hooks/useToggle';
import { Button } from 'react-native';

export default function About() {
  const [isScreenShown, showScreen] = useToggle();

  if (!isScreenShown) {
    return (
      <Button title="Show screen" onPress={() => showScreen()} />
    );
  }
  return (
    <CartProductsGrid />
  );
}