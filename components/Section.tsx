import { Text, View, ViewProps } from 'react-native';

type CategoryProps = {
  title: string
} & ViewProps

export default function Section({ title, children, style }: CategoryProps) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  )
}

const styles = {
  container: {
    borderColor: '#25292e',
    borderWidth: 2,
    borderRadius: 8,
    padding: 8,
    gap: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold' as const,
  },
}