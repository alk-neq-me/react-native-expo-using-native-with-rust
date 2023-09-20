import { SafeAreaProvider, initialWindowMetrics } from "react-native-safe-area-context"

interface ProviderProps {
  children: React.ReactNode
}

export function Provider(props: ProviderProps) {
  const { children } = props;

  return <SafeAreaProvider initialMetrics={initialWindowMetrics}>
    {children}
  </SafeAreaProvider>
}
